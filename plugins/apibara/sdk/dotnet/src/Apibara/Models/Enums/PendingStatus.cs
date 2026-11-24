using System;
using System.Text.Json.Serialization;
using Apibara.Core.Enum;

namespace Apibara.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PendingStatus>))]
public sealed record PendingStatus : OpenStringEnum<PendingStatus>
{
    private PendingStatus(string value) : base(value)
    {
    }

    public static readonly PendingStatus Pending = new("pending");

    public static readonly PendingStatus Available = new("available");

    public static readonly PendingStatus Unknown = new("unknown");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onAvailable,
        Func<TResult> onUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Available => onAvailable(),
            _ when this == Unknown => onUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onAvailable, Action onUnknown, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Available) onAvailable();
        else if (this == Unknown) onUnknown();
        else otherwise(Value);
    }
}
