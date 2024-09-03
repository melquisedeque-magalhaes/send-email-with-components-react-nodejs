import { Body, Container, Font, Head, Heading, Html, Img, Link, Preview, Tailwind, Text } from "@react-email/components";

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
          <Body className="bg-card-purple font-sans rounded">

           <Container className="py-10">
              <Img src="https://www.vunex.com.br/logo-white.png" alt="logo da Vunex" width="197" height="43" className="w-[197px] h-[44px] mx-auto" />

              <Heading className="text-center text-2xl text-white">
                  Olá <span className="text-white">{name}!</span>
              </Heading>
            
              <Text className="mt-4 text-base text-white text-center">
              Recebemos o seu pedido se alteração de senha. Caso você não tenha feito o pedido, entre imediatamente em contato com nosso suporte.
              </Text>
            </Container>

            <Container className="bg-white py-6 rounded">
              <Heading className="text-gray-text text-base font-medium text-center">Clique no botão abaixo</Heading>

              <Container className="text-center mx-auto mt-4">
                <Link 
                  href={url}
                  className="bg-primary-purple text-white font-bold rounded px-6 w-[163px] h-[32px] py-2 text-center cursor-pointer"
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

            <Container className="py-10" />
          </Body>
        </Tailwind>
      </Html>
  );
}