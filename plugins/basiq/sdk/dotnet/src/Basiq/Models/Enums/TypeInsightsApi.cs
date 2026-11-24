using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The type of insight to generate.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeInsightsApi>))]
public sealed record TypeInsightsApi : OpenStringEnum<TypeInsightsApi>
{
    private TypeInsightsApi(string value) : base(value)
    {
    }

    public static readonly TypeInsightsApi ExpenseRatioVerification = new("EXPENSE_RATIO_VERIFICATION");

    public static readonly TypeInsightsApi BalanceVerification = new("BALANCE_VERIFICATION");

    public static readonly TypeInsightsApi AccountVerification = new("ACCOUNT_VERIFICATION");

    public static readonly TypeInsightsApi IdentityVerification = new("IDENTITY_VERIFICATION");

    public static readonly TypeInsightsApi IncomeVerification = new("INCOME_VERIFICATION");

    public TResult Match<TResult>(Func<TResult> onExpenseRatioVerification,
        Func<TResult> onBalanceVerification,
        Func<TResult> onAccountVerification,
        Func<TResult> onIdentityVerification,
        Func<TResult> onIncomeVerification,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ExpenseRatioVerification => onExpenseRatioVerification(),
            _ when this == BalanceVerification => onBalanceVerification(),
            _ when this == AccountVerification => onAccountVerification(),
            _ when this == IdentityVerification => onIdentityVerification(),
            _ when this == IncomeVerification => onIncomeVerification(),
            _ => otherwise(Value)
        };

    public void Match(Action onExpenseRatioVerification,
        Action onBalanceVerification,
        Action onAccountVerification,
        Action onIdentityVerification,
        Action onIncomeVerification,
        Action<string> otherwise)
    {
        if (this == ExpenseRatioVerification) onExpenseRatioVerification();
        else if (this == BalanceVerification) onBalanceVerification();
        else if (this == AccountVerification) onAccountVerification();
        else if (this == IdentityVerification) onIdentityVerification();
        else if (this == IncomeVerification) onIncomeVerification();
        else otherwise(Value);
    }
}
