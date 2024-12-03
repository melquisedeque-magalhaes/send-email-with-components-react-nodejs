import { Body, Container, Font, Head, Heading, Html, Img, Link, Preview, Tailwind, Text } from "@react-email/components";

interface LoginEmailTemplateProps {
    phone: string
    nomeCompany: string
    previewText: string
    url: string
}

export function sendNotificationBotEmailTemplate({ phone, nomeCompany, previewText, url }: LoginEmailTemplateProps) {
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
            </Container>

            <Container className="bg-white py-6 w-full rounded">
              <Heading className="text-gray-text text-base font-normal text-center">
                O número <span className="font-bold">{phone}</span> foi 
              </Heading>
              <Heading className="text-gray-text text-base font-normal text-center">
                desconectado da sua companhia <span className="font-bold">{nomeCompany}</span>
              </Heading>

              <Container className="text-center mx-auto mt-4">
                <Link 
                  href={url}
                  className="bg-primary-purple text-white font-bold rounded px-6 w-[187px] h-[32px] py-2 text-center cursor-pointer"
                >
                  VERIFICAR
                </Link>
              </Container>

              <Container className="text-center mx-auto mt-4">
                <Text className="text-gray-text text-sm font-normal text-center">
                  Caso você tenha desconectado,<br /> ignore este e-mail.
                </Text>
              </Container>
            </Container>

            <Container className="py-10" />
          </Body>
        </Tailwind>
      </Html>
  );
}