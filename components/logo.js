import Link from "next/link";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
`;

const Logo = () => {
  const logoImg = `/images/ea.svg`;

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={logoImg} width={20} height={20} alt="logo" />
          <Text fontFamily="'Poppins', sans-serif" fontWeight="bold" ml={1}>
            Eray Alkış
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
