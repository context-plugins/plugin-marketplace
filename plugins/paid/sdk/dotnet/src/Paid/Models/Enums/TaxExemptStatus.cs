using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TaxExemptStatus>))]
public sealed record TaxExemptStatus : OpenStringEnum<TaxExemptStatus>
{
    private TaxExemptStatus(string value) : base(value)
    {
    }

    public static readonly TaxExemptStatus None = new("none");

    public static readonly TaxExemptStatus Exempt = new("exempt");

    public static readonly TaxExemptStatus Reverse = new("reverse");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onExempt,
        Func<TResult> onReverse,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Exempt => onExempt(),
            _ when this == Reverse => onReverse(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onExempt, Action onReverse, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Exempt) onExempt();
        else if (this == Reverse) onReverse();
        else otherwise(Value);
    }
}
