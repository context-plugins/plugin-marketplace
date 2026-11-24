using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Enum;

namespace Hightouch.Models.Enums;

/// <summary>
/// Whether this recipient was accepted for delivery or rejected at validation time.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Accepted = new("accepted");

    public static readonly Status Rejected = new("rejected");

    public TResult Match<TResult>(Func<TResult> onAccepted,
        Func<TResult> onRejected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Accepted => onAccepted(),
            _ when this == Rejected => onRejected(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccepted, Action onRejected, Action<string> otherwise)
    {
        if (this == Accepted) onAccepted();
        else if (this == Rejected) onRejected();
        else otherwise(Value);
    }
}
