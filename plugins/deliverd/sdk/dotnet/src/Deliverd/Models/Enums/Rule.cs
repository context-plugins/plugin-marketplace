using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// What applies before the step's action: none, gate (check_gate for <c>action</c>), approval (request_approval) or review (request_review). none when omitted
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Rule>))]
public sealed record Rule : OpenStringEnum<Rule>
{
    private Rule(string value) : base(value)
    {
    }

    public static readonly Rule None = new("none");

    public static readonly Rule Gate = new("gate");

    public static readonly Rule Approval = new("approval");

    public static readonly Rule Review = new("review");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onGate,
        Func<TResult> onApproval,
        Func<TResult> onReview,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Gate => onGate(),
            _ when this == Approval => onApproval(),
            _ when this == Review => onReview(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onGate, Action onApproval, Action onReview, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Gate) onGate();
        else if (this == Approval) onApproval();
        else if (this == Review) onReview();
        else otherwise(Value);
    }
}
