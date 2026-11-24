using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The type of augmented manifest. If you don't specify, the default is PlainTextDocument. PLAIN_TEXT_DOCUMENT A document type that represents any unicode text that is encoded in UTF-8.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DocumentType1>))]
public sealed record DocumentType1 : OpenStringEnum<DocumentType1>
{
    private DocumentType1(string value) : base(value)
    {
    }

    public static readonly DocumentType1 PlainTextDocument = new("PLAIN_TEXT_DOCUMENT");

    public static readonly DocumentType1 SemiStructuredDocument = new("SEMI_STRUCTURED_DOCUMENT");

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
