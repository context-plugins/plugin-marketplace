using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enum representing the fulfillment type for reimbursements in the Spend API.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<FulfillmentType>))]
public sealed record FulfillmentType : OpenStringEnum<FulfillmentType>
{
    private FulfillmentType(string value) : base(value)
    {
    }

    public static readonly FulfillmentType Ach = new("ACH");

    public static readonly FulfillmentType Payroll = new("PAYROLL");

    public TResult Match<TResult>(Func<TResult> onAch, Func<TResult> onPayroll, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ach => onAch(),
            _ when this == Payroll => onPayroll(),
            _ => otherwise(Value)
        };

    public void Match(Action onAch, Action onPayroll, Action<string> otherwise)
    {
        if (this == Ach) onAch();
        else if (this == Payroll) onPayroll();
        else otherwise(Value);
    }
}
