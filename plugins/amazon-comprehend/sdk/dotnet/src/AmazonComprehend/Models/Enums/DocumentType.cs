using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The type of augmented manifest. PlainTextDocument or SemiStructuredDocument. If you don't specify, the default is PlainTextDocument. PLAIN_TEXT_DOCUMENT A document type that represents any unicode text that is encoded in UTF-8. SEMI_STRUCTURED_DOCUMENT A document type with positional and structural context, like a PDF. For training with Amazon Comprehend, only PDFs are supported. For inference, Amazon Comprehend support PDFs, DOCX and TXT.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DocumentType>))]
public sealed record DocumentType : OpenStringEnum<DocumentType>
{
    private DocumentType(string value) : base(value)
    {
    }

    public static readonly DocumentType PlainTextDocument = new("PLAIN_TEXT_DOCUMENT");

    public static readonly DocumentType SemiStructuredDocument = new("SEMI_STRUCTURED_DOCUMENT");

    public TResult Match<TResult>(Func<TResult> onPlainTextDocument,
        Func<TResult> onSemiStructuredDocument,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PlainTextDocument => onPlainTextDocument(),
            _ when this == SemiStructuredDocument => onSemiStructuredDocument(),
            _ => otherwise(Value)
        };

    public void Match(Action onPlainTextDocument, Action onSemiStructuredDocument, Action<string> otherwise)
    {
        if (this == PlainTextDocument) onPlainTextDocument();
        else if (this == SemiStructuredDocument) onSemiStructuredDocument();
        else otherwise(Value);
    }
}
