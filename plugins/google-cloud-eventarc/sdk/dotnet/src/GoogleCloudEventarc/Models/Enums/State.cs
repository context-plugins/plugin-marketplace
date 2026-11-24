using System;
using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Enum;

namespace GoogleCloudEventarc.Models.Enums;

/// <summary>
/// Output only. The state of a Channel.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State Pending = new("PENDING");

    public static readonly State Active = new("ACTIVE");

    public static readonly State Inactive = new("INACTIVE");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onPending,
        Func<TResult> onActive,
        Func<TResult> onInactive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Pending => onPending(),
            _ when this == Active => onActive(),
            _ when this == Inactive => onInactive(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onPending,
        Action onActive,
        Action onInactive,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Pending) onPending();
        else if (this == Active) onActive();
        else if (this == Inactive) onInactive();
        else otherwise(Value);
    }
}
