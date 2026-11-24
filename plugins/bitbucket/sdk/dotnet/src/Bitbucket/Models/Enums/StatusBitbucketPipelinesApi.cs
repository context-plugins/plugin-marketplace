using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The current status of the runner.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusBitbucketPipelinesApi>))]
public sealed record StatusBitbucketPipelinesApi : OpenStringEnum<StatusBitbucketPipelinesApi>
{
    private StatusBitbucketPipelinesApi(string value) : base(value)
    {
    }

    public static readonly StatusBitbucketPipelinesApi Unregistered = new("UNREGISTERED");

    public static readonly StatusBitbucketPipelinesApi Online = new("ONLINE");

    public static readonly StatusBitbucketPipelinesApi Offline = new("OFFLINE");

    public static readonly StatusBitbucketPipelinesApi Disabled = new("DISABLED");

    public static readonly StatusBitbucketPipelinesApi Enabled = new("ENABLED");

    public static readonly StatusBitbucketPipelinesApi Unhealthy = new("UNHEALTHY");

    public TResult Match<TResult>(Func<TResult> onUnregistered,
        Func<TResult> onOnline,
        Func<TResult> onOffline,
        Func<TResult> onDisabled,
        Func<TResult> onEnabled,
        Func<TResult> onUnhealthy,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Unregistered => onUnregistered(),
            _ when this == Online => onOnline(),
            _ when this == Offline => onOffline(),
            _ when this == Disabled => onDisabled(),
            _ when this == Enabled => onEnabled(),
            _ when this == Unhealthy => onUnhealthy(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnregistered,
        Action onOnline,
        Action onOffline,
        Action onDisabled,
        Action onEnabled,
        Action onUnhealthy,
        Action<string> otherwise)
    {
        if (this == Unregistered) onUnregistered();
        else if (this == Online) onOnline();
        else if (this == Offline) onOffline();
        else if (this == Disabled) onDisabled();
        else if (this == Enabled) onEnabled();
        else if (this == Unhealthy) onUnhealthy();
        else otherwise(Value);
    }
}
