using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// ReceiptStatusType enum for Spend \&amp; Expense Transactions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReceiptStatusTypeBillV3TransactionsApi>))]
public sealed record ReceiptStatusTypeBillV3TransactionsApi : OpenStringEnum<ReceiptStatusTypeBillV3TransactionsApi>
{
    private ReceiptStatusTypeBillV3TransactionsApi(string value) : base(value)
    {
    }

    public static readonly ReceiptStatusTypeBillV3TransactionsApi Validated = new("VALIDATED");

    public static readonly ReceiptStatusTypeBillV3TransactionsApi NotValidated = new("NOT_VALIDATED");

    public static readonly ReceiptStatusTypeBillV3TransactionsApi Attached = new("ATTACHED");

    public static readonly ReceiptStatusTypeBillV3TransactionsApi Missing = new("MISSING");

    public static readonly ReceiptStatusTypeBillV3TransactionsApi NotRequired = new("NOT_REQUIRED");

    public static readonly ReceiptStatusTypeBillV3TransactionsApi NotAttached = new("NOT_ATTACHED");

    public TResult Match<TResult>(Func<TResult> onValidated,
        Func<TResult> onNotValidated,
        Func<TResult> onAttached,
        Func<TResult> onMissing,
        Func<TResult> onNotRequired,
        Func<TResult> onNotAttached,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Validated => onValidated(),
            _ when this == NotValidated => onNotValidated(),
            _ when this == Attached => onAttached(),
            _ when this == Missing => onMissing(),
            _ when this == NotRequired => onNotRequired(),
            _ when this == NotAttached => onNotAttached(),
            _ => otherwise(Value)
        };

    public void Match(Action onValidated,
        Action onNotValidated,
        Action onAttached,
        Action onMissing,
        Action onNotRequired,
        Action onNotAttached,
        Action<string> otherwise)
    {
        if (this == Validated) onValidated();
        else if (this == NotValidated) onNotValidated();
        else if (this == Attached) onAttached();
        else if (this == Missing) onMissing();
        else if (this == NotRequired) onNotRequired();
        else if (this == NotAttached) onNotAttached();
        else otherwise(Value);
    }
}
