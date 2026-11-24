using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Account type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum Transaction = new("transaction");

    public static readonly TypeEnum Savings = new("savings");

    public static readonly TypeEnum CreditCard = new("credit-card");

    public static readonly TypeEnum Mortgage = new("mortgage");

    public static readonly TypeEnum Loan = new("loan");

    public static readonly TypeEnum Investment = new("investment");

    public static readonly TypeEnum TermDeposit = new("term-deposit");

    public static readonly TypeEnum Insurance = new("insurance");

    public static readonly TypeEnum Foreign = new("foreign");

    public static readonly TypeEnum Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onTransaction,
        Func<TResult> onSavings,
        Func<TResult> onCreditCard,
        Func<TResult> onMortgage,
        Func<TResult> onLoan,
        Func<TResult> onInvestment,
        Func<TResult> onTermDeposit,
        Func<TResult> onInsurance,
        Func<TResult> onForeign,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Transaction => onTransaction(),
            _ when this == Savings => onSavings(),
            _ when this == CreditCard => onCreditCard(),
            _ when this == Mortgage => onMortgage(),
            _ when this == Loan => onLoan(),
            _ when this == Investment => onInvestment(),
            _ when this == TermDeposit => onTermDeposit(),
            _ when this == Insurance => onInsurance(),
            _ when this == Foreign => onForeign(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onTransaction,
        Action onSavings,
        Action onCreditCard,
        Action onMortgage,
        Action onLoan,
        Action onInvestment,
        Action onTermDeposit,
        Action onInsurance,
        Action onForeign,
        Action onUnknown,
        Action<string> otherwise)
    {
        if (this == Transaction) onTransaction();
        else if (this == Savings) onSavings();
        else if (this == CreditCard) onCreditCard();
        else if (this == Mortgage) onMortgage();
        else if (this == Loan) onLoan();
        else if (this == Investment) onInvestment();
        else if (this == TermDeposit) onTermDeposit();
        else if (this == Insurance) onInsurance();
        else if (this == Foreign) onForeign();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
