using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The bank account type. Plaid returns <c>CHECKING</c> or <c>SAVING</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AccountType>))]
public sealed record AccountType : OpenStringEnum<AccountType>
{
    private AccountType(string value) : base(value)
    {
    }

    public static readonly AccountType Checking = new("CHECKING");

    public static readonly AccountType BusinessChecking = new("BUSINESS_CHECKING");

    public static readonly AccountType BusinessSavings = new("BUSINESS_SAVINGS");

    public static readonly AccountType PersonalChecking = new("PERSONAL_CHECKING");

    public static readonly AccountType PersonalSavings = new("PERSONAL_SAVINGS");

    public static readonly AccountType Saving = new("SAVING");

    public TResult Match<TResult>(Func<TResult> onChecking,
        Func<TResult> onBusinessChecking,
        Func<TResult> onBusinessSavings,
        Func<TResult> onPersonalChecking,
        Func<TResult> onPersonalSavings,
        Func<TResult> onSaving,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Checking => onChecking(),
            _ when this == BusinessChecking => onBusinessChecking(),
            _ when this == BusinessSavings => onBusinessSavings(),
            _ when this == PersonalChecking => onPersonalChecking(),
            _ when this == PersonalSavings => onPersonalSavings(),
            _ when this == Saving => onSaving(),
            _ => otherwise(Value)
        };

    public void Match(Action onChecking,
        Action onBusinessChecking,
        Action onBusinessSavings,
        Action onPersonalChecking,
        Action onPersonalSavings,
        Action onSaving,
        Action<string> otherwise)
    {
        if (this == Checking) onChecking();
        else if (this == BusinessChecking) onBusinessChecking();
        else if (this == BusinessSavings) onBusinessSavings();
        else if (this == PersonalChecking) onPersonalChecking();
        else if (this == PersonalSavings) onPersonalSavings();
        else if (this == Saving) onSaving();
        else otherwise(Value);
    }
}
