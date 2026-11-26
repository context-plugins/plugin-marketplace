using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// ReceiptStatusType enum for Spend \&amp; Expense Transactions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReceiptStatusType>))]
public sealed record ReceiptStatusType : OpenStringEnum<ReceiptStatusType>
{
    private ReceiptStatusType(string value) : base(value)
    {
    }

    public static readonly ReceiptStatusType Validated = new("VALIDATED");

    public static readonly ReceiptStatusType NotValidated = new("NOT_VALIDATED");

    public static readonly ReceiptStatusType Attached = new("ATTACHED");

    public static readonly ReceiptStatusType Missing = new("MISSING");

    public static readonly ReceiptStatusType NotRequired = new("NOT_REQUIRED");

    public static readonly ReceiptStatusType NotAttached = new("NOT_ATTACHED");

    public static readonly ReceiptStatusType Unspecified = new("UNSPECIFIED");

    public TResult Match<TResult>(Func<TResult> onValidated,
        Func<TResult> onNotValidated,
        Func<TResult> onAttached,
        Func<TResult> onMissing,
        Func<TResult> onNotRequired,
        Func<TResult> onNotAttached,
        Func<TResult> onUnspecified,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Validated => onValidated(),
            _ when this == NotValidated => onNotValidated(),
            _ when this == Attached => onAttached(),
            _ when this == Missing => onMissing(),
            _ when this == NotRequired => onNotRequired(),
            _ when this == NotAttached => onNotAttached(),
            _ when this == Unspecified => onUnspecified(),
            _ => otherwise(Value)
        };

    public void Match(Action onValidated,
        Action onNotValidated,
        Action onAttached,
        Action onMissing,
        Action onNotRequired,
        Action onNotAttached,
        Action onUnspecified,
        Action<string> otherwise)
    {
        if (this == Validated) onValidated();
        else if (this == NotValidated) onNotValidated();
        else if (this == Attached) onAttached();
        else if (this == Missing) onMissing();
        else if (this == NotRequired) onNotRequired();
        else if (this == NotAttached) onNotAttached();
        else if (this == Unspecified) onUnspecified();
        else otherwise(Value);
    }
}
