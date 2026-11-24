using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Chart of accounts type response.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ChartOfAccountsTypeResponse>))]
public sealed record ChartOfAccountsTypeResponse : OpenStringEnum<ChartOfAccountsTypeResponse>
{
    private ChartOfAccountsTypeResponse(string value) : base(value)
    {
    }

    public static readonly ChartOfAccountsTypeResponse Unspecified = new("UNSPECIFIED");

    public static readonly ChartOfAccountsTypeResponse AccountsPayable = new("ACCOUNTS_PAYABLE");

    public static readonly ChartOfAccountsTypeResponse AccountsReceivable = new("ACCOUNTS_RECEIVABLE");

    public static readonly ChartOfAccountsTypeResponse Bank = new("BANK");

    public static readonly ChartOfAccountsTypeResponse CostOfGoodsSold = new("COST_OF_GOODS_SOLD");

    public static readonly ChartOfAccountsTypeResponse CreditCard = new("CREDIT_CARD");

    public static readonly ChartOfAccountsTypeResponse Equity = new("EQUITY");

    public static readonly ChartOfAccountsTypeResponse Expense = new("EXPENSE");

    public static readonly ChartOfAccountsTypeResponse FixedAsset = new("FIXED_ASSET");

    public static readonly ChartOfAccountsTypeResponse Income = new("INCOME");

    public static readonly ChartOfAccountsTypeResponse LongTermLiability = new("LONG_TERM_LIABILITY");

    public static readonly ChartOfAccountsTypeResponse OtherAsset = new("OTHER_ASSET");

    public static readonly ChartOfAccountsTypeResponse OtherCurrentAsset = new("OTHER_CURRENT_ASSET");

    public static readonly ChartOfAccountsTypeResponse OtherCurrentLiability = new("OTHER_CURRENT_LIABILITY");

    public static readonly ChartOfAccountsTypeResponse OtherExpense = new("OTHER_EXPENSE");

    public static readonly ChartOfAccountsTypeResponse OtherIncome = new("OTHER_INCOME");

    public static readonly ChartOfAccountsTypeResponse NonPosting = new("NON_POSTING");

    public static readonly ChartOfAccountsTypeResponse Undefined = new("UNDEFINED");

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
        Func<TResult> onUndefined,
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
            _ when this == Undefined => onUndefined(),
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
        Action onUndefined,
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
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
