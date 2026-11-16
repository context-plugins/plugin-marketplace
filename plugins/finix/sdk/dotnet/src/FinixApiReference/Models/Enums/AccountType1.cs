using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of bank account. Use the following respective enum when creating a <c>Payment Instrument</c> for:&lt;ul&gt;&lt;li&gt;&lt;strong&gt;PERSONAL_CHECKING: &lt;/strong&gt;A personal checking account.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;PERSONAL_SAVINGS: &lt;/strong&gt;A personal savings account.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;BUSINESS_CHECKING: &lt;/strong&gt;A business checking account.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;BUSINESS_SAVINGS: &lt;/strong&gt;A business savings account.&lt;/li&gt;&lt;/ul&gt;
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AccountType1>))]
public sealed record AccountType1 : OpenStringEnum<AccountType1>
{
    private AccountType1(string value) : base(value)
    {
    }

    public static readonly AccountType1 BusinessChecking = new("BUSINESS_CHECKING");

    public static readonly AccountType1 BusinessSavings = new("BUSINESS_SAVINGS");

    public static readonly AccountType1 PersonalChecking = new("PERSONAL_CHECKING");

    public static readonly AccountType1 PersonalSavings = new("PERSONAL_SAVINGS");

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
