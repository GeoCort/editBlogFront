import React, {useRef} from "react"
import { Editor } from "@tinymce/tinymce-react"
export default function Edit(){
    const log = () => {
        if (editorRef.current) {
          console.log(editorRef.current.getContent());
        }
      };
    return (
        <>
        <section className="edit">
            <h1 className="edit-header">
            Create a New Post
            </h1>
            <div className="edit-section">
                <div>
                    <label htmlFor="titleInput">Title</label>
                    <input type="text" placeholder="Title" id="titleInput" required/> 
                </div>
                <div>
                    <label htmlFor="subTitleInput">Subtitle</label>
                    <input type="text" placeholder="Subtitle" id="subTitleInput"/> 
                </div>
            </div>
            <Editor
      apiKey={process.env.VITE_TINYMC_API_KEY}
      init={{
        plugins: [
          // Core editing features
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          // Your account includes a free trial of TinyMCE premium features
          // Try the most popular premium features until Nov 24, 2024:
          'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
          // Early access to document converters
          'importword', 'exportword', 'exportpdf'
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
        exportpdf_converter_options: { 'format': 'Letter', 'margin_top': '1in', 'margin_right': '1in', 'margin_bottom': '1in', 'margin_left': '1in' },
        exportword_converter_options: { 'document': { 'size': 'Letter' } },
        importword_converter_options: { 'formatting': { 'styles': 'inline', 'resets': 'inline',	'defaults': 'inline', } },
      }}
      initialValue="Welcome to TinyMCE!"
    />
        <button className="endBtn">Create Post</button>
        </section>
        </>
    )
}