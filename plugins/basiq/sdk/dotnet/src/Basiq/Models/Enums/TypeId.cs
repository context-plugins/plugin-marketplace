using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeId>))]
public sealed record TypeId : OpenStringEnum<TypeId>
{
    private TypeId(string value) : base(value)
    {
    }

    public static readonly TypeId AccountVerification = new("ACCOUNT_VERIFICATION");

    public static readonly TypeId BalanceVerification = new("BALANCE_VERIFICATION");

    public static readonly TypeId IdentityVerification = new("IDENTITY_VERIFICATION");

    public static readonly TypeId IncomeVerification = new("INCOME_VERIFICATION");

    public static readonly TypeId ExpenseRatioVerification = new("EXPENSE_RATIO_VERIFICATION");

    public TResult Match<TResult>(Func<TResult> onAccountVerification,
        Func<TResult> onBalanceVerification,
        Func<TResult> onIdentityVerification,
        Func<TResult> onIncomeVerification,
        Func<TResult> onExpenseRatioVerification,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AccountVerification => onAccountVerification(),
            _ when this == BalanceVerification => onBalanceVerification(),
            _ when this == IdentityVerification => onIdentityVerification(),
            _ when this == IncomeVerification => onIncomeVerification(),
            _ when this == ExpenseRatioVerification => onExpenseRatioVerification(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccountVerification,
        Action onBalanceVerification,
        Action onIdentityVerification,
        Action onIncomeVerification,
        Action onExpenseRatioVerification,
        Action<string> otherwise)
    {
        if (this == AccountVerification) onAccountVerification();
        else if (this == BalanceVerification) onBalanceVerification();
        else if (this == IdentityVerification) onIdentityVerification();
        else if (this == IncomeVerification) onIncomeVerification();
        else if (this == ExpenseRatioVerification) onExpenseRatioVerification();
        else otherwise(Value);
    }
}
