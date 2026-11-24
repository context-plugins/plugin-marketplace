using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. Represents the state of the plugin. Note this field will not be set for plugins developed via plugin framework as the state will be managed at plugin instance level.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State3ApigeeProjectsApi>))]
public sealed record State3ApigeeProjectsApi : OpenStringEnum<State3ApigeeProjectsApi>
{
    private State3ApigeeProjectsApi(string value) : base(value)
    {
    }

    public static readonly State3ApigeeProjectsApi StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State3ApigeeProjectsApi Enabled = new("ENABLED");

    public static readonly State3ApigeeProjectsApi Disabled = new("DISABLED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onEnabled,
        Func<TResult> onDisabled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Enabled => onEnabled(),
            _ when this == Disabled => onDisabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified, Action onEnabled, Action onDisabled, Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Enabled) onEnabled();
        else if (this == Disabled) onDisabled();
        else otherwise(Value);
    }
}
