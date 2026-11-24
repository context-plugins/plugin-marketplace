using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Enum;

namespace Contentstack.Models.Enums;

/// <summary>
/// Current status of the deployment.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusContentstackLaunchDeploymentsApi>))]
public sealed record StatusContentstackLaunchDeploymentsApi : OpenStringEnum<StatusContentstackLaunchDeploymentsApi>
{
    private StatusContentstackLaunchDeploymentsApi(string value) : base(value)
    {
    }

    public static readonly StatusContentstackLaunchDeploymentsApi Queued = new("queued");

    public static readonly StatusContentstackLaunchDeploymentsApi Building = new("building");

    public static readonly StatusContentstackLaunchDeploymentsApi Deploying = new("deploying");

    public static readonly StatusContentstackLaunchDeploymentsApi Live = new("live");

    public static readonly StatusContentstackLaunchDeploymentsApi Failed = new("failed");

    public static readonly StatusContentstackLaunchDeploymentsApi Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onBuilding,
        Func<TResult> onDeploying,
        Func<TResult> onLive,
        Func<TResult> onFailed,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Building => onBuilding(),
            _ when this == Deploying => onDeploying(),
            _ when this == Live => onLive(),
            _ when this == Failed => onFailed(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onBuilding,
        Action onDeploying,
        Action onLive,
        Action onFailed,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Building) onBuilding();
        else if (this == Deploying) onDeploying();
        else if (this == Live) onLive();
        else if (this == Failed) onFailed();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
