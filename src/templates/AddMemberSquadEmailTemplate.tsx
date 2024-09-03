import { Body, Container, Font, Head, Heading, Html, Img, Link, Preview, Tailwind, Text } from "@react-email/components";

interface LoginEmailTemplateProps {
    name: string
    previewText: string
    url: string
    email: string
    password: string
    adminName: string
}

export function AddMemberSquadEmailTemplate({ name, previewText, url, email, password, adminName }: LoginEmailTemplateProps) {
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

              <Heading className="text-center text-2xl text-white">Olá, <span className="text-white">{name}!</span></Heading>
            
              <Text className="mt-4 text-base text-white text-center">
                Você foi adicionado como membro da Equipe
                por {adminName}
              </Text>
            </Container>

            <Container className="bg-white py-6 w-full rounded">
              <Heading className="text-gray-text text-base font-medium text-center">Suas credenciais:</Heading>

            
              <Heading 
                className="text-gray-text font-medium text-base text-center"
              >
                Login:{' '}
                <span className="font-normal text-gray-text">
                  {email}
                </span>
              </Heading>

              <Heading 
                className="text-gray-text font-medium text-base text-center"
              >
                Senha:{' '}
                <span className="font-normal text-gray-text">
                  {password}
                </span>
              </Heading>

              <Container className="text-center mx-auto mt-4">
                <Link 
                  href={url}
                  className="bg-primary-purple text-white font-bold rounded px-6 w-[187px] h-[32px] py-2 text-center cursor-pointer"
                >
                  ACESSAR
                </Link>
              </Container>  
              
            </Container>

            <Container className="py-10" />
          </Body>
        </Tailwind>
      </Html>
  );
}