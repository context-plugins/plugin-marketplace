using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// BankAccountType Enum.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BankAccountType>))]
public sealed record BankAccountType : OpenStringEnum<BankAccountType>
{
    private BankAccountType(string value) : base(value)
    {
    }

    public static readonly BankAccountType Checking = new("CHECKING");

    public static readonly BankAccountType Savings = new("SAVINGS");

    public TResult Match<TResult>(Func<TResult> onChecking, Func<TResult> onSavings, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Checking => onChecking(),
            _ when this == Savings => onSavings(),
            _ => otherwise(Value)
        };

    public void Match(Action onChecking, Action onSavings, Action<string> otherwise)
    {
        if (this == Checking) onChecking();
        else if (this == Savings) onSavings();
        else otherwise(Value);
    }
}
