using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// Current instructions on action to be taken at maturity. This includes default actions that may be specified in the terms and conditions for the product e.g. roll-over to the same term and frequency of interest payments.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MaturityInstructions>))]
public sealed record MaturityInstructions : OpenStringEnum<MaturityInstructions>
{
    private MaturityInstructions(string value) : base(value)
    {
    }

    public static readonly MaturityInstructions HoldOnMaturity = new("HOLD_ON_MATURITY");

    public static readonly MaturityInstructions PaidOutAtMaturity = new("PAID_OUT_AT_MATURITY");

    public static readonly MaturityInstructions RolledOver = new("ROLLED_OVER");

    public TResult Match<TResult>(Func<TResult> onHoldOnMaturity,
        Func<TResult> onPaidOutAtMaturity,
        Func<TResult> onRolledOver,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == HoldOnMaturity => onHoldOnMaturity(),
            _ when this == PaidOutAtMaturity => onPaidOutAtMaturity(),
            _ when this == RolledOver => onRolledOver(),
            _ => otherwise(Value)
        };

    public void Match(Action onHoldOnMaturity,
        Action onPaidOutAtMaturity,
        Action onRolledOver,
        Action<string> otherwise)
    {
        if (this == HoldOnMaturity) onHoldOnMaturity();
        else if (this == PaidOutAtMaturity) onPaidOutAtMaturity();
        else if (this == RolledOver) onRolledOver();
        else otherwise(Value);
    }
}
