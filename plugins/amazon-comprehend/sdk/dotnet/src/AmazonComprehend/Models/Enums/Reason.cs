using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Reason codes include the following values: DOCUMENT_SIZE_EXCEEDED - Document size is too large. Check the size of your file and resubmit the request. UNSUPPORTED_DOC_TYPE - Document type is not supported. Check the file type and resubmit the request. PAGE_LIMIT_EXCEEDED - Too many pages in the document. Check the number of pages in your file and resubmit the request. TEXTRACT_ACCESS_DENIED - Access denied to Amazon Textract. Verify that your account has permission to use Amazon Textract API operations and resubmit the request. NOT_TEXTRACT_JSON - Document is not Amazon Textract JSON format. Ve
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason DocumentSizeExceeded = new("DOCUMENT_SIZE_EXCEEDED");

    public static readonly Reason UnsupportedDocType = new("UNSUPPORTED_DOC_TYPE");

    public static readonly Reason PageLimitExceeded = new("PAGE_LIMIT_EXCEEDED");

    public static readonly Reason TextractAccessDenied = new("TEXTRACT_ACCESS_DENIED");

    public TResult Match<TResult>(Func<TResult> onDocumentSizeExceeded,
        Func<TResult> onUnsupportedDocType,
        Func<TResult> onPageLimitExceeded,
        Func<TResult> onTextractAccessDenied,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DocumentSizeExceeded => onDocumentSizeExceeded(),
            _ when this == UnsupportedDocType => onUnsupportedDocType(),
            _ when this == PageLimitExceeded => onPageLimitExceeded(),
            _ when this == TextractAccessDenied => onTextractAccessDenied(),
            _ => otherwise(Value)
        };

    public void Match(Action onDocumentSizeExceeded,
        Action onUnsupportedDocType,
        Action onPageLimitExceeded,
        Action onTextractAccessDenied,
        Action<string> otherwise)
    {
        if (this == DocumentSizeExceeded) onDocumentSizeExceeded();
        else if (this == UnsupportedDocType) onUnsupportedDocType();
        else if (this == PageLimitExceeded) onPageLimitExceeded();
        else if (this == TextractAccessDenied) onTextractAccessDenied();
        else otherwise(Value);
    }
}
