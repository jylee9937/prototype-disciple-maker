
import Page1Frame from "../components/chapter1/Page1Frame";
import Page2Frame from "../components/chapter1/Page2Frame";
import ChapterLayout from "../layouts/ChapterLayout";
import Page3Frame from "../components/chapter1/Page3Frame";

function Chapter1(){
    return(
        <ChapterLayout>
            <Page1Frame></Page1Frame>
            <Page2Frame></Page2Frame>
            <Page3Frame></Page3Frame>
        </ChapterLayout>
    )
}

export default Chapter1;