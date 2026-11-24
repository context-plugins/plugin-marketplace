using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The current state of the plugin action in the plugin instance.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State6ApigeeProjectsApi>))]
public sealed record State6ApigeeProjectsApi : OpenStringEnum<State6ApigeeProjectsApi>
{
    private State6ApigeeProjectsApi(string value) : base(value)
    {
    }

    public static readonly State6ApigeeProjectsApi StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State6ApigeeProjectsApi Enabled = new("ENABLED");

    public static readonly State6ApigeeProjectsApi Disabled = new("DISABLED");

    public static readonly State6ApigeeProjectsApi Enabling = new("ENABLING");

    public static readonly State6ApigeeProjectsApi Disabling = new("DISABLING");

    public static readonly State6ApigeeProjectsApi Error = new("ERROR");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onEnabled,
        Func<TResult> onDisabled,
        Func<TResult> onEnabling,
        Func<TResult> onDisabling,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Enabled => onEnabled(),
            _ when this == Disabled => onDisabled(),
            _ when this == Enabling => onEnabling(),
            _ when this == Disabling => onDisabling(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onEnabled,
        Action onDisabled,
        Action onEnabling,
        Action onDisabling,
        Action onError,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Enabled) onEnabled();
        else if (this == Disabled) onDisabled();
        else if (this == Enabling) onEnabling();
        else if (this == Disabling) onDisabling();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
