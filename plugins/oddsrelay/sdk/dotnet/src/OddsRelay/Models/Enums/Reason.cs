using System;
using System.Text.Json.Serialization;
using OddsRelay.Core.Enum;

namespace OddsRelay.Models.Enums;

/// <summary>
/// <c>account_suspended</c> only.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason Payment = new("payment");

    public static readonly Reason Terms = new("terms");

    public TResult Match<TResult>(Func<TResult> onPayment, Func<TResult> onTerms, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Payment => onPayment(),
            _ when this == Terms => onTerms(),
            _ => otherwise(Value)
        };

    public void Match(Action onPayment, Action onTerms, Action<string> otherwise)
    {
        if (this == Payment) onPayment();
        else if (this == Terms) onTerms();
        else otherwise(Value);
    }
}
