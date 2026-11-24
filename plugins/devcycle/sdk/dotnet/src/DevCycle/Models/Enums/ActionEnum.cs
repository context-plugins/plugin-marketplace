using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ActionEnum>))]
public sealed record ActionEnum : OpenStringEnum<ActionEnum>
{
    private ActionEnum(string value) : base(value)
    {
    }

    public static readonly ActionEnum Approved = new("approved");

    public static readonly ActionEnum Rejected = new("rejected");

    public TResult Match<TResult>(Func<TResult> onApproved,
        Func<TResult> onRejected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Approved => onApproved(),
            _ when this == Rejected => onRejected(),
            _ => otherwise(Value)
        };

    public void Match(Action onApproved, Action onRejected, Action<string> otherwise)
    {
        if (this == Approved) onApproved();
        else if (this == Rejected) onRejected();
        else otherwise(Value);
    }
}
