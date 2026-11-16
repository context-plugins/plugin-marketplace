using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Specifies whether the <c>Balance Adjustment</c> increases or decreases the account balance.
/// <para>
/// Acceptable values:
/// - <c>TOP_UP</c> - Adds funds to the balance (e.g., a deposit or manual funding).
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type6>))]
public sealed record Type6 : OpenStringEnum<Type6>
{
    private Type6(string value) : base(value)
    {
    }

    public static readonly Type6 TopUp = new("TOP_UP");

    public TResult Match<TResult>(Func<TResult> onTopUp, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TopUp => onTopUp(),
            _ => otherwise(Value)
        };

    public void Match(Action onTopUp, Action<string> otherwise)
    {
        if (this == TopUp) onTopUp();
        else otherwise(Value);
    }
}
