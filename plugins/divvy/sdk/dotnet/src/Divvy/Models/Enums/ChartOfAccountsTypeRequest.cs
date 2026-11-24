using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Chart of accounts type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ChartOfAccountsTypeRequest>))]
public sealed record ChartOfAccountsTypeRequest : OpenStringEnum<ChartOfAccountsTypeRequest>
{
    private ChartOfAccountsTypeRequest(string value) : base(value)
    {
    }

    public static readonly ChartOfAccountsTypeRequest Unspecified = new("UNSPECIFIED");

    public static readonly ChartOfAccountsTypeRequest AccountsPayable = new("ACCOUNTS_PAYABLE");

    public static readonly ChartOfAccountsTypeRequest AccountsReceivable = new("ACCOUNTS_RECEIVABLE");

    public static readonly ChartOfAccountsTypeRequest Bank = new("BANK");

    public static readonly ChartOfAccountsTypeRequest CostOfGoodsSold = new("COST_OF_GOODS_SOLD");

    public static readonly ChartOfAccountsTypeRequest CreditCard = new("CREDIT_CARD");

    public static readonly ChartOfAccountsTypeRequest Equity = new("EQUITY");

    public static readonly ChartOfAccountsTypeRequest Expense = new("EXPENSE");

    public static readonly ChartOfAccountsTypeRequest FixedAsset = new("FIXED_ASSET");

    public static readonly ChartOfAccountsTypeRequest Income = new("INCOME");

    public static readonly ChartOfAccountsTypeRequest LongTermLiability = new("LONG_TERM_LIABILITY");

    public static readonly ChartOfAccountsTypeRequest OtherAsset = new("OTHER_ASSET");

    public static readonly ChartOfAccountsTypeRequest OtherCurrentAsset = new("OTHER_CURRENT_ASSET");

    public static readonly ChartOfAccountsTypeRequest OtherCurrentLiability = new("OTHER_CURRENT_LIABILITY");

    public static readonly ChartOfAccountsTypeRequest OtherExpense = new("OTHER_EXPENSE");

    public static readonly ChartOfAccountsTypeRequest OtherIncome = new("OTHER_INCOME");

    public static readonly ChartOfAccountsTypeRequest NonPosting = new("NON_POSTING");

    public TResult Match<TResult>(Func<TResult> onUnspecified,
        Func<TResult> onAccountsPayable,
        Func<TResult> onAccountsReceivable,
        Func<TResult> onBank,
        Func<TResult> onCostOfGoodsSold,
        Func<TResult> onCreditCard,
        Func<TResult> onEquity,
        Func<TResult> onExpense,
        Func<TResult> onFixedAsset,
        Func<TResult> onIncome,
        Func<TResult> onLongTermLiability,
        Func<TResult> onOtherAsset,
        Func<TResult> onOtherCurrentAsset,
        Func<TResult> onOtherCurrentLiability,
        Func<TResult> onOtherExpense,
        Func<TResult> onOtherIncome,
        Func<TResult> onNonPosting,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unspecified => onUnspecified(),
            _ when this == AccountsPayable => onAccountsPayable(),
            _ when this == AccountsReceivable => onAccountsReceivable(),
            _ when this == Bank => onBank(),
            _ when this == CostOfGoodsSold => onCostOfGoodsSold(),
            _ when this == CreditCard => onCreditCard(),
            _ when this == Equity => onEquity(),
            _ when this == Expense => onExpense(),
            _ when this == FixedAsset => onFixedAsset(),
            _ when this == Income => onIncome(),
            _ when this == LongTermLiability => onLongTermLiability(),
            _ when this == OtherAsset => onOtherAsset(),
            _ when this == OtherCurrentAsset => onOtherCurrentAsset(),
            _ when this == OtherCurrentLiability => onOtherCurrentLiability(),
            _ when this == OtherExpense => onOtherExpense(),
            _ when this == OtherIncome => onOtherIncome(),
            _ when this == NonPosting => onNonPosting(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnspecified,
        Action onAccountsPayable,
        Action onAccountsReceivable,
        Action onBank,
        Action onCostOfGoodsSold,
        Action onCreditCard,
        Action onEquity,
        Action onExpense,
        Action onFixedAsset,
        Action onIncome,
        Action onLongTermLiability,
        Action onOtherAsset,
        Action onOtherCurrentAsset,
        Action onOtherCurrentLiability,
        Action onOtherExpense,
        Action onOtherIncome,
        Action onNonPosting,
        Action<string> otherwise)
    {
        if (this == Unspecified) onUnspecified();
        else if (this == AccountsPayable) onAccountsPayable();
        else if (this == AccountsReceivable) onAccountsReceivable();
        else if (this == Bank) onBank();
        else if (this == CostOfGoodsSold) onCostOfGoodsSold();
        else if (this == CreditCard) onCreditCard();
        else if (this == Equity) onEquity();
        else if (this == Expense) onExpense();
        else if (this == FixedAsset) onFixedAsset();
        else if (this == Income) onIncome();
        else if (this == LongTermLiability) onLongTermLiability();
        else if (this == OtherAsset) onOtherAsset();
        else if (this == OtherCurrentAsset) onOtherCurrentAsset();
        else if (this == OtherCurrentLiability) onOtherCurrentLiability();
        else if (this == OtherExpense) onOtherExpense();
        else if (this == OtherIncome) onOtherIncome();
        else if (this == NonPosting) onNonPosting();
        else otherwise(Value);
    }
}
