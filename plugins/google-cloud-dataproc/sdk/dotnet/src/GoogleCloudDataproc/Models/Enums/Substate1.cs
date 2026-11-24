using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. Additional state information, which includes status reported by the agent.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Substate1>))]
public sealed record Substate1 : OpenStringEnum<Substate1>
{
    private Substate1(string value) : base(value)
    {
    }

    public static readonly Substate1 Unspecified = new("UNSPECIFIED");

    public static readonly Substate1 Submitted = new("SUBMITTED");

    public static readonly Substate1 Queued = new("QUEUED");

    public static readonly Substate1 StaleStatus = new("STALE_STATUS");

    public TResult Match<TResult>(Func<TResult> onUnspecified,
        Func<TResult> onSubmitted,
        Func<TResult> onQueued,
        Func<TResult> onStaleStatus,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unspecified => onUnspecified(),
            _ when this == Submitted => onSubmitted(),
            _ when this == Queued => onQueued(),
            _ when this == StaleStatus => onStaleStatus(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnspecified,
        Action onSubmitted,
        Action onQueued,
        Action onStaleStatus,
        Action<string> otherwise)
    {
        if (this == Unspecified) onUnspecified();
        else if (this == Submitted) onSubmitted();
        else if (this == Queued) onQueued();
        else if (this == StaleStatus) onStaleStatus();
        else otherwise(Value);
    }
}
