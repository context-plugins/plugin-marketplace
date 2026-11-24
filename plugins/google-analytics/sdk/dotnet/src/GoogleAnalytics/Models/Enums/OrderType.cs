using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// Controls the rule for dimension value ordering.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrderType>))]
public sealed record OrderType : OpenStringEnum<OrderType>
{
    private OrderType(string value) : base(value)
    {
    }

    public static readonly OrderType OrderTypeUnspecified = new("ORDER_TYPE_UNSPECIFIED");

    public static readonly OrderType Alphanumeric = new("ALPHANUMERIC");

    public static readonly OrderType CaseInsensitiveAlphanumeric = new("CASE_INSENSITIVE_ALPHANUMERIC");

    public static readonly OrderType Numeric = new("NUMERIC");

    public TResult Match<TResult>(Func<TResult> onOrderTypeUnspecified,
        Func<TResult> onAlphanumeric,
        Func<TResult> onCaseInsensitiveAlphanumeric,
        Func<TResult> onNumeric,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OrderTypeUnspecified => onOrderTypeUnspecified(),
            _ when this == Alphanumeric => onAlphanumeric(),
            _ when this == CaseInsensitiveAlphanumeric => onCaseInsensitiveAlphanumeric(),
            _ when this == Numeric => onNumeric(),
            _ => otherwise(Value)
        };

    public void Match(Action onOrderTypeUnspecified,
        Action onAlphanumeric,
        Action onCaseInsensitiveAlphanumeric,
        Action onNumeric,
        Action<string> otherwise)
    {
        if (this == OrderTypeUnspecified) onOrderTypeUnspecified();
        else if (this == Alphanumeric) onAlphanumeric();
        else if (this == CaseInsensitiveAlphanumeric) onCaseInsensitiveAlphanumeric();
        else if (this == Numeric) onNumeric();
        else otherwise(Value);
    }
}
