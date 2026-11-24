using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<InvoiceTaxStatus>))]
public sealed record InvoiceTaxStatus : OpenStringEnum<InvoiceTaxStatus>
{
    private InvoiceTaxStatus(string value) : base(value)
    {
    }

    public static readonly InvoiceTaxStatus NotApplicable = new("not_applicable");

    public static readonly InvoiceTaxStatus Calculated = new("calculated");

    public static readonly InvoiceTaxStatus Committed = new("committed");

    public static readonly InvoiceTaxStatus Failed = new("failed");

    public static readonly InvoiceTaxStatus Voided = new("voided");

    public TResult Match<TResult>(Func<TResult> onNotApplicable,
        Func<TResult> onCalculated,
        Func<TResult> onCommitted,
        Func<TResult> onFailed,
        Func<TResult> onVoided,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotApplicable => onNotApplicable(),
            _ when this == Calculated => onCalculated(),
            _ when this == Committed => onCommitted(),
            _ when this == Failed => onFailed(),
            _ when this == Voided => onVoided(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotApplicable,
        Action onCalculated,
        Action onCommitted,
        Action onFailed,
        Action onVoided,
        Action<string> otherwise)
    {
        if (this == NotApplicable) onNotApplicable();
        else if (this == Calculated) onCalculated();
        else if (this == Committed) onCommitted();
        else if (this == Failed) onFailed();
        else if (this == Voided) onVoided();
        else otherwise(Value);
    }
}
