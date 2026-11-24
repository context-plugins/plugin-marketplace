using System;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Enum;

namespace NordicFinancialNews.Models.Enums;

/// <summary>
/// Tranche type. <c>ordinary</c> for the recurring/regular dividend; <c>special</c> for an extra/bonus/one-off dividend. When an issuer proposes both for the same date, they are returned as two separate events.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Kind>))]
public sealed record Kind : OpenStringEnum<Kind>
{
    private Kind(string value) : base(value)
    {
    }

    public static readonly Kind Ordinary = new("ordinary");

    public static readonly Kind Special = new("special");

    public TResult Match<TResult>(Func<TResult> onOrdinary, Func<TResult> onSpecial, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ordinary => onOrdinary(),
            _ when this == Special => onSpecial(),
            _ => otherwise(Value)
        };

    public void Match(Action onOrdinary, Action onSpecial, Action<string> otherwise)
    {
        if (this == Ordinary) onOrdinary();
        else if (this == Special) onSpecial();
        else otherwise(Value);
    }
}
