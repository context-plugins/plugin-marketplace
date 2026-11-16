using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AttemptBankAccountValidationCheck>))]
public sealed record AttemptBankAccountValidationCheck : OpenStringEnum<AttemptBankAccountValidationCheck>
{
    private AttemptBankAccountValidationCheck(string value) : base(value)
    {
    }

    public static readonly AttemptBankAccountValidationCheck Checking = new("CHECKING");

    public static readonly AttemptBankAccountValidationCheck Savings = new("SAVINGS");

    public static readonly AttemptBankAccountValidationCheck PersonalChecking = new("PERSONAL_CHECKING");

    public static readonly AttemptBankAccountValidationCheck PersonalSavings = new("PERSONAL_SAVINGS");

    public static readonly AttemptBankAccountValidationCheck BusinessChecking = new("BUSINESS_CHECKING");

    public static readonly AttemptBankAccountValidationCheck BusinessSavings = new("BUSINESS_SAVINGS");

    public static readonly AttemptBankAccountValidationCheck Corporate = new("CORPORATE");

    public static readonly AttemptBankAccountValidationCheck CorpSavings = new("CORP_SAVINGS");

    public TResult Match<TResult>(Func<TResult> onChecking,
        Func<TResult> onSavings,
        Func<TResult> onPersonalChecking,
        Func<TResult> onPersonalSavings,
        Func<TResult> onBusinessChecking,
        Func<TResult> onBusinessSavings,
        Func<TResult> onCorporate,
        Func<TResult> onCorpSavings,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Checking => onChecking(),
            _ when this == Savings => onSavings(),
            _ when this == PersonalChecking => onPersonalChecking(),
            _ when this == PersonalSavings => onPersonalSavings(),
            _ when this == BusinessChecking => onBusinessChecking(),
            _ when this == BusinessSavings => onBusinessSavings(),
            _ when this == Corporate => onCorporate(),
            _ when this == CorpSavings => onCorpSavings(),
            _ => otherwise(Value)
        };

    public void Match(Action onChecking,
        Action onSavings,
        Action onPersonalChecking,
        Action onPersonalSavings,
        Action onBusinessChecking,
        Action onBusinessSavings,
        Action onCorporate,
        Action onCorpSavings,
        Action<string> otherwise)
    {
        if (this == Checking) onChecking();
        else if (this == Savings) onSavings();
        else if (this == PersonalChecking) onPersonalChecking();
        else if (this == PersonalSavings) onPersonalSavings();
        else if (this == BusinessChecking) onBusinessChecking();
        else if (this == BusinessSavings) onBusinessSavings();
        else if (this == Corporate) onCorporate();
        else if (this == CorpSavings) onCorpSavings();
        else otherwise(Value);
    }
}
