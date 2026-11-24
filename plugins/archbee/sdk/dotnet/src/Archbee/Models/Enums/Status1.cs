using System;
using System.Text.Json.Serialization;
using Archbee.Core.Enum;

namespace Archbee.Models.Enums;

/// <summary>
/// request status
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Pending = new("Pending");

    public static readonly Status1 Accepted = new("Accepted");

    public static readonly Status1 Rejected = new("Rejected");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onAccepted,
        Func<TResult> onRejected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Accepted => onAccepted(),
            _ when this == Rejected => onRejected(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onAccepted, Action onRejected, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Accepted) onAccepted();
        else if (this == Rejected) onRejected();
        else otherwise(Value);
    }
}
