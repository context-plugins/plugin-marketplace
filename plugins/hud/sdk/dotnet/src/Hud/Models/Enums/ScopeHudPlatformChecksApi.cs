using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ScopeHudPlatformChecksApi>))]
public sealed record ScopeHudPlatformChecksApi : OpenStringEnum<ScopeHudPlatformChecksApi>
{
    private ScopeHudPlatformChecksApi(string value) : base(value)
    {
    }

    public static readonly ScopeHudPlatformChecksApi Asset = new("asset");

    public static readonly ScopeHudPlatformChecksApi Task = new("task");

    public TResult Match<TResult>(Func<TResult> onAsset, Func<TResult> onTask, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Asset => onAsset(),
            _ when this == Task => onTask(),
            _ => otherwise(Value)
        };

    public void Match(Action onAsset, Action onTask, Action<string> otherwise)
    {
        if (this == Asset) onAsset();
        else if (this == Task) onTask();
        else otherwise(Value);
    }
}
