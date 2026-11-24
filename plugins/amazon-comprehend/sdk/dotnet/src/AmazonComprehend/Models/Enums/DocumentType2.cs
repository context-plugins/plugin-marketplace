using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The type of input documents for training the model. Provide plain-text documents to create a plain-text model, and provide semi-structured documents to create a native document model.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DocumentType2>))]
public sealed record DocumentType2 : OpenStringEnum<DocumentType2>
{
    private DocumentType2(string value) : base(value)
    {
    }

    public static readonly DocumentType2 PlainTextDocument = new("PLAIN_TEXT_DOCUMENT");

    public static readonly DocumentType2 SemiStructuredDocument = new("SEMI_STRUCTURED_DOCUMENT");

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
