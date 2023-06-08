import Vimeo from "@u-wave/react-vimeo";

export default function Home() {
  return (
    <>
      <Vimeo
        video={'https://vimeo.com/831094569'}
        loop={true}
        showPortrait={false}
        showTitle={false}
        showByline={false}
      />
    </>
  );
}
