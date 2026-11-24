using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// Error code for the cause of the error.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ErrorCode>))]
public sealed record ErrorCode : OpenStringEnum<ErrorCode>
{
    private ErrorCode(string value) : base(value)
    {
    }

    public static readonly ErrorCode TextractBadPage = new("TEXTRACT_BAD_PAGE");

    public static readonly ErrorCode TextractProvisionedThroughputExceeded = new(
        "TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED");

    public static readonly ErrorCode PageCharactersExceeded = new("PAGE_CHARACTERS_EXCEEDED");

    public static readonly ErrorCode PageSizeExceeded = new("PAGE_SIZE_EXCEEDED");

    public static readonly ErrorCode InternalServerError = new("INTERNAL_SERVER_ERROR");

    public TResult Match<TResult>(Func<TResult> onTextractBadPage,
        Func<TResult> onTextractProvisionedThroughputExceeded,
        Func<TResult> onPageCharactersExceeded,
        Func<TResult> onPageSizeExceeded,
        Func<TResult> onInternalServerError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TextractBadPage => onTextractBadPage(),
            _ when this == TextractProvisionedThroughputExceeded => onTextractProvisionedThroughputExceeded(),
            _ when this == PageCharactersExceeded => onPageCharactersExceeded(),
            _ when this == PageSizeExceeded => onPageSizeExceeded(),
            _ when this == InternalServerError => onInternalServerError(),
            _ => otherwise(Value)
        };

    public void Match(Action onTextractBadPage,
        Action onTextractProvisionedThroughputExceeded,
        Action onPageCharactersExceeded,
        Action onPageSizeExceeded,
        Action onInternalServerError,
        Action<string> otherwise)
    {
        if (this == TextractBadPage) onTextractBadPage();
        else if (this == TextractProvisionedThroughputExceeded) onTextractProvisionedThroughputExceeded();
        else if (this == PageCharactersExceeded) onPageCharactersExceeded();
        else if (this == PageSizeExceeded) onPageSizeExceeded();
        else if (this == InternalServerError) onInternalServerError();
        else otherwise(Value);
    }
}
