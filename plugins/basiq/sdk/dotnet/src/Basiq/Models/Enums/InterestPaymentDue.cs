using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the rate that can be offered.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InterestPaymentDue>))]
public sealed record InterestPaymentDue : OpenStringEnum<InterestPaymentDue>
{
    private InterestPaymentDue(string value) : base(value)
    {
    }

    public static readonly InterestPaymentDue InAdvance = new("IN_ADVANCE");

    public static readonly InterestPaymentDue InArrears = new("IN_ARREARS");

    public TResult Match<TResult>(Func<TResult> onInAdvance,
        Func<TResult> onInArrears,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InAdvance => onInAdvance(),
            _ when this == InArrears => onInArrears(),
            _ => otherwise(Value)
        };

    public void Match(Action onInAdvance, Action onInArrears, Action<string> otherwise)
    {
        if (this == InAdvance) onInAdvance();
        else if (this == InArrears) onInArrears();
        else otherwise(Value);
    }
}
