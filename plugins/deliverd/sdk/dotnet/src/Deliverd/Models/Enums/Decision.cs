using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Decision>))]
public sealed record Decision : OpenStringEnum<Decision>
{
    private Decision(string value) : base(value)
    {
    }

    public static readonly Decision Approved = new("approved");

    public static readonly Decision Rejected = new("rejected");

    public static readonly Decision ChangesRequested = new("changes_requested");

    public TResult Match<TResult>(Func<TResult> onApproved,
        Func<TResult> onRejected,
        Func<TResult> onChangesRequested,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Approved => onApproved(),
            _ when this == Rejected => onRejected(),
            _ when this == ChangesRequested => onChangesRequested(),
            _ => otherwise(Value)
        };

    public void Match(Action onApproved, Action onRejected, Action onChangesRequested, Action<string> otherwise)
    {
        if (this == Approved) onApproved();
        else if (this == Rejected) onRejected();
        else if (this == ChangesRequested) onChangesRequested();
        else otherwise(Value);
    }
}
