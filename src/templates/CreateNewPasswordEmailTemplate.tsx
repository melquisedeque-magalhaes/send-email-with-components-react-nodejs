import { Body, Column, Container, Font, Head, Heading, Html, Img, Link, Preview, Row, Tailwind, Text } from "@react-email/components";

interface CreateNewPasswordEmailTemplateProps {
    name: string
    previewText: string
    url: string
}

export function CreateNewPasswordEmailTemplate({ name, previewText, url }: CreateNewPasswordEmailTemplateProps) {
  return (
      <Html>
        <Head>
            <meta charSet="UTF-8" />
            <Font
              fontFamily="Inter"
              fallbackFontFamily="sans-serif"
              webFont={{
                url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
                format: "woff2",
              }}
              fontWeight={400}
              fontStyle="normal"
            />
            <Font
              fontFamily="Inter"
              fallbackFontFamily="sans-serif"
              webFont={{
                url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
                format: "woff2",
              }}
              fontWeight={500}
              fontStyle="normal"
            />
            <Font
              fontFamily="Inter"
              fallbackFontFamily="sans-serif"
              webFont={{
                url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
                format: "woff2",
              }}
              fontWeight={700}
              fontStyle="normal"
            />
            <title>Login</title>
        </Head>
        <Preview>{previewText}</Preview>
        <Tailwind
          config={{
            theme: {
              extend: {
                colors: {
                  'primary-purple': '#7614EE',
                  'secondary-purple': '#4100BA',
                  'card-purple': '#7614EE',
                  'background-purple': '#eaedff',
                  'yellow-primary': '#FFB800',
                  'purple-light': '#EDDFFF',
                  'gray-text': '#4D4D4D',
                  'gray-dark': '#888888',
                  success: '#62C900',
                  'gray-tooltip-dark': '#333333',
                },
              },
            },
          }}
        >
          <Body className="bg-white my-auto mx-auto font-sans">

            <Container className="mx-auto">
              <Img src="https://www.vunex.com.br/logo-roxa.png" alt="logo da Vunex" width="219" height="43" className="w-[420px] h-[224px] mx-auto" />

              <Heading className="text-center text-2xl text-gray-text">Olá <span className="text-primary-purple">{name}!</span></Heading>
            
              <Text className="mt-4 text-base text-gray-text text-center">
              Recebemos o seu pedido se alteração de senha. Caso você não tenha feito o pedido, entre imediatamente em contato com nosso suporte.
              </Text>
            </Container>

            <Container className="bg-purple-light py-6 mx-auto rounded">
              <Img src="https://www.vunex.com.br/brand-logo-roxa.png" alt="icon do Vunex" width="48" height="44" className="w-[48px] h-[44px] mx-auto" />

              <Heading className="text-gray-text text-base font-medium text-center">Clique no botão abaixo</Heading>

              <Container className="text-center mx-auto mt-4">
                <Link 
                  href={url}
                  className="bg-primary-purple text-white font-bold rounded px-6 w-[187px] h-[32px] py-2 text-center cursor-pointer"
                >
                  CRIAR NOVA SENHA
                </Link>
              </Container>

              <Text className="mt-4 text-sm text-gray-text text-center">
                Caso não consiga visualizar o botão acima, clique no link abaixo:
              </Text>

            <Container className="text-center mx-auto">
                <Link href={url}>
                    {url}
                </Link>
            </Container>
              
              
            </Container>

            <Container className="mt-4">
              <Text className="text-base text-center text-gray-text">
                Seja bem-vindo a Vunex, conte conosco para agilizar o atendimento de sua empresa.
              </Text>

              <Text className="text-base text-center text-gray-text mt-2">
                Nossos canais de contato:
              </Text>

              <Row className="w-[174px]">
                <Column>
                  <Link href="#" target="_blank">
                    <Img 
                      src="https://www.vunex.com.br/discord.png" 
                      alt="icon do discord" 
                      width="24" 
                      height="24" 
                      className="w-[24px] h-[24px] mx-auto" 
                    />
                  </Link>
                </Column>   
                <Column>
                  <Link href="https://www.instagram.com/Vunex.br" target="_blank">
                    <Img 
                      src="https://www.vunex.com.br/instagram.png" 
                      alt="icon do discord" 
                      width="24" 
                      height="24" 
                      className="w-[24px] h-[24px] mx-auto" 
                    />
                  </Link>
                </Column> 
                <Column>
                  <Link href="#" target="_blank">
                    <Img 
                      src="https://www.vunex.com.br/facebook.png" 
                      alt="icon do discord" 
                      width="24" 
                      height="24" 
                      className="w-[24px] h-[24px] mx-auto" 
                    />
                  </Link>
                </Column>   
              </Row>
      
            </Container>
          </Body>
        </Tailwind>
      </Html>
  );
}