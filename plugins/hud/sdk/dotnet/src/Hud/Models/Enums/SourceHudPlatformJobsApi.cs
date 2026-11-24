using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SourceHudPlatformJobsApi>))]
public sealed record SourceHudPlatformJobsApi : OpenStringEnum<SourceHudPlatformJobsApi>
{
    private SourceHudPlatformJobsApi(string value) : base(value)
    {
    }

    public static readonly SourceHudPlatformJobsApi System = new("system");

    public static readonly SourceHudPlatformJobsApi User = new("user");

    public static readonly SourceHudPlatformJobsApi Agent = new("agent");

    public TResult Match<TResult>(Func<TResult> onSystem,
        Func<TResult> onUser,
        Func<TResult> onAgent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == System => onSystem(),
            _ when this == User => onUser(),
            _ when this == Agent => onAgent(),
            _ => otherwise(Value)
        };

    public void Match(Action onSystem, Action onUser, Action onAgent, Action<string> otherwise)
    {
        if (this == System) onSystem();
        else if (this == User) onUser();
        else if (this == Agent) onAgent();
        else otherwise(Value);
    }
}
