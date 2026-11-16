using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of bank account.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AccountType2>))]
public sealed record AccountType2 : OpenStringEnum<AccountType2>
{
    private AccountType2(string value) : base(value)
    {
    }

    public static readonly AccountType2 BusinessChecking = new("BUSINESS_CHECKING");

    public static readonly AccountType2 BusinessSavings = new("BUSINESS_SAVINGS");

    public static readonly AccountType2 PersonalChecking = new("PERSONAL_CHECKING");

    public static readonly AccountType2 PersonalSavings = new("PERSONAL_SAVINGS");

    public TResult Match<TResult>(Func<TResult> onBusinessChecking,
        Func<TResult> onBusinessSavings,
        Func<TResult> onPersonalChecking,
        Func<TResult> onPersonalSavings,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BusinessChecking => onBusinessChecking(),
            _ when this == BusinessSavings => onBusinessSavings(),
            _ when this == PersonalChecking => onPersonalChecking(),
            _ when this == PersonalSavings => onPersonalSavings(),
            _ => otherwise(Value)
        };

    public void Match(Action onBusinessChecking,
        Action onBusinessSavings,
        Action onPersonalChecking,
        Action onPersonalSavings,
        Action<string> otherwise)
    {
        if (this == BusinessChecking) onBusinessChecking();
        else if (this == BusinessSavings) onBusinessSavings();
        else if (this == PersonalChecking) onPersonalChecking();
        else if (this == PersonalSavings) onPersonalSavings();
        else otherwise(Value);
    }
}
