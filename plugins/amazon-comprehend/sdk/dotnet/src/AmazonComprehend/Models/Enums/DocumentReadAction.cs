using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// This field defines the Amazon Textract API operation that Amazon Comprehend uses to extract text from PDF files and image files. Enter one of the following values: TEXTRACT_DETECT_DOCUMENT_TEXT - The Amazon Comprehend service uses the DetectDocumentText API operation. TEXTRACT_ANALYZE_DOCUMENT - The Amazon Comprehend service uses the AnalyzeDocument API operation.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DocumentReadAction>))]
public sealed record DocumentReadAction : OpenStringEnum<DocumentReadAction>
{
    private DocumentReadAction(string value) : base(value)
    {
    }

    public static readonly DocumentReadAction TextractDetectDocumentText = new("TEXTRACT_DETECT_DOCUMENT_TEXT");

    public static readonly DocumentReadAction TextractAnalyzeDocument = new("TEXTRACT_ANALYZE_DOCUMENT");

    public TResult Match<TResult>(Func<TResult> onTextractDetectDocumentText,
        Func<TResult> onTextractAnalyzeDocument,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TextractDetectDocumentText => onTextractDetectDocumentText(),
            _ when this == TextractAnalyzeDocument => onTextractAnalyzeDocument(),
            _ => otherwise(Value)
        };

    public void Match(Action onTextractDetectDocumentText, Action onTextractAnalyzeDocument, Action<string> otherwise)
    {
        if (this == TextractDetectDocumentText) onTextractDetectDocumentText();
        else if (this == TextractAnalyzeDocument) onTextractAnalyzeDocument();
        else otherwise(Value);
    }
}
