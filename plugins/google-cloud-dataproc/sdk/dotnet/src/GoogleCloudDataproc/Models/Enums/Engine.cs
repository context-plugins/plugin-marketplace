using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. The cluster engine.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Engine>))]
public sealed record Engine : OpenStringEnum<Engine>
{
    private Engine(string value) : base(value)
    {
    }

    public static readonly Engine EngineUnspecified = new("ENGINE_UNSPECIFIED");

    public static readonly Engine Default = new("DEFAULT");

    public static readonly Engine Lightning = new("LIGHTNING");

    public TResult Match<TResult>(Func<TResult> onEngineUnspecified,
        Func<TResult> onDefault,
        Func<TResult> onLightning,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EngineUnspecified => onEngineUnspecified(),
            _ when this == Default => onDefault(),
            _ when this == Lightning => onLightning(),
            _ => otherwise(Value)
        };

    public void Match(Action onEngineUnspecified, Action onDefault, Action onLightning, Action<string> otherwise)
    {
        if (this == EngineUnspecified) onEngineUnspecified();
        else if (this == Default) onDefault();
        else if (this == Lightning) onLightning();
        else otherwise(Value);
    }
}
