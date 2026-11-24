using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Document type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type3>))]
public sealed record Type3 : OpenStringEnum<Type3>
{
    private Type3(string value) : base(value)
    {
    }

    public static readonly Type3 NativePdf = new("NATIVE_PDF");

    public static readonly Type3 ScannedPdf = new("SCANNED_PDF");

    public static readonly Type3 MsWord = new("MS_WORD");

    public static readonly Type3 Image = new("IMAGE");

    public static readonly Type3 PlainText = new("PLAIN_TEXT");

    public static readonly Type3 TextractDetectDocumentTextJson = new("TEXTRACT_DETECT_DOCUMENT_TEXT_JSON");

    public static readonly Type3 TextractAnalyzeDocumentJson = new("TEXTRACT_ANALYZE_DOCUMENT_JSON");

    public TResult Match<TResult>(Func<TResult> onNativePdf,
        Func<TResult> onScannedPdf,
        Func<TResult> onMsWord,
        Func<TResult> onImage,
        Func<TResult> onPlainText,
        Func<TResult> onTextractDetectDocumentTextJson,
        Func<TResult> onTextractAnalyzeDocumentJson,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NativePdf => onNativePdf(),
            _ when this == ScannedPdf => onScannedPdf(),
            _ when this == MsWord => onMsWord(),
            _ when this == Image => onImage(),
            _ when this == PlainText => onPlainText(),
            _ when this == TextractDetectDocumentTextJson => onTextractDetectDocumentTextJson(),
            _ when this == TextractAnalyzeDocumentJson => onTextractAnalyzeDocumentJson(),
            _ => otherwise(Value)
        };

    public void Match(Action onNativePdf,
        Action onScannedPdf,
        Action onMsWord,
        Action onImage,
        Action onPlainText,
        Action onTextractDetectDocumentTextJson,
        Action onTextractAnalyzeDocumentJson,
        Action<string> otherwise)
    {
        if (this == NativePdf) onNativePdf();
        else if (this == ScannedPdf) onScannedPdf();
        else if (this == MsWord) onMsWord();
        else if (this == Image) onImage();
        else if (this == PlainText) onPlainText();
        else if (this == TextractDetectDocumentTextJson) onTextractDetectDocumentTextJson();
        else if (this == TextractAnalyzeDocumentJson) onTextractAnalyzeDocumentJson();
        else otherwise(Value);
    }
}
