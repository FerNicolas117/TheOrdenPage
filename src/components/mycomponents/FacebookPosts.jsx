import { FacebookProvider, Like } from 'react-facebook';

export default function FacebookPosts() {
  return (
    <FacebookProvider appId="61571017660168">
      <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
    </FacebookProvider>
  );
}
