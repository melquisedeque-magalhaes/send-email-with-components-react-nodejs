import { Body, Column, Container, Font, Head, Heading, Html, Img, Link, Preview, Row, Tailwind, Text } from "@react-email/components";

interface LoginEmailTemplateProps {
    name: string
    previewText: string
    url: string
}

export function LoginEmailTemplate({ name, previewText, url }: LoginEmailTemplateProps) {
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
              <Img src="https://simplebot.vercel.app/logo.png" alt="logo do simplebot" width="219" height="43" className="w-[219px] h-[43px] mx-auto" />

              <Heading className="text-center text-2xl text-gray-text">Olá <span className="text-primary-purple">{name}!</span></Heading>
            
              <Text className="mt-4 text-base text-gray-text text-center">
                Sua assinatura está ativa e sua companhia já foi criada,
                acesse através dos dados abaixo:
              </Text>
            </Container>

            <Container className="bg-purple-light py-6 mx-auto rounded">
              <Img src="https://simplebot.vercel.app/icon.png" alt="icon do simplebot" width="48" height="44" className="w-[48px] h-[44px] mx-auto" />

              <Heading className="text-gray-text text-base font-medium text-center">Suas credenciais:</Heading>

            
              <Heading 
                className="text-gray-text font-medium text-base text-center"
              >
                Login:{' '}
                <span className="font-normal text-gray-text">
                  email@gmail.com
                </span>
              </Heading>

              <Heading 
                className="text-gray-text font-medium text-base text-center"
              >
                Senha:{' '}
                <span className="font-normal text-gray-text">
                  10203010
                </span>
              </Heading>

              <Container className="text-center mx-auto mt-4">
                <Link 
                  href={url}
                  className="bg-primary-purple text-white font-bold rounded px-6 w-[187px] h-[32px] py-2 text-center cursor-pointer"
                >
                  Acessar
                </Link>
              </Container>
              
            </Container>

            <Container className="mt-4">
              <Text className="text-base text-center text-gray-text">
                Seja bem-vindo a SimpleBot, conte conosco para agilizar o atendimento de sua empresa.
              </Text>

              <Text className="text-base text-center text-gray-text mt-2">
                Nossos canais de contato:
              </Text>

              <Row className="w-[174px]">
                <Column>
                  <Link href="#" target="_blank">
                    <Img 
                      src="https://simplebot.vercel.app/discord.png" 
                      alt="icon do discord" 
                      width="24" 
                      height="24" 
                      className="w-[24px] h-[24px] mx-auto" 
                    />
                  </Link>
                </Column>   
                <Column>
                  <Link href="https://www.instagram.com/simplebot.br" target="_blank">
                    <Img 
                      src="https://simplebot.vercel.app/instagram.png" 
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
                      src="https://simplebot.vercel.app/facebook.png" 
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