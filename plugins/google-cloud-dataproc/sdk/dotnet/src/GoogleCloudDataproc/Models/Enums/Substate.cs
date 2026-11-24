using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. Additional state information that includes status reported by the agent.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Substate>))]
public sealed record Substate : OpenStringEnum<Substate>
{
    private Substate(string value) : base(value)
    {
    }

    public static readonly Substate Unspecified = new("UNSPECIFIED");

    public static readonly Substate Unhealthy = new("UNHEALTHY");

    public static readonly Substate StaleStatus = new("STALE_STATUS");

    public TResult Match<TResult>(Func<TResult> onUnspecified,
        Func<TResult> onUnhealthy,
        Func<TResult> onStaleStatus,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unspecified => onUnspecified(),
            _ when this == Unhealthy => onUnhealthy(),
            _ when this == StaleStatus => onStaleStatus(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnspecified, Action onUnhealthy, Action onStaleStatus, Action<string> otherwise)
    {
        if (this == Unspecified) onUnspecified();
        else if (this == Unhealthy) onUnhealthy();
        else if (this == StaleStatus) onStaleStatus();
        else otherwise(Value);
    }
}
