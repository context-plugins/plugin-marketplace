using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

/// <summary>
/// Whether this credit currency is active or archived.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CreditCurrencyStatus>))]
public sealed record CreditCurrencyStatus : OpenStringEnum<CreditCurrencyStatus>
{
    private CreditCurrencyStatus(string value) : base(value)
    {
    }

    public static readonly CreditCurrencyStatus Active = new("active");

    public static readonly CreditCurrencyStatus Archived = new("archived");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onArchived, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onArchived, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
