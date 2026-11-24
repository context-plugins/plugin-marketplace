using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. The state of the Analytics add-on.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State3>))]
public sealed record State3 : OpenStringEnum<State3>
{
    private State3(string value) : base(value)
    {
    }

    public static readonly State3 AddonStateUnspecified = new("ADDON_STATE_UNSPECIFIED");

    public static readonly State3 Enabling = new("ENABLING");

    public static readonly State3 Enabled = new("ENABLED");

    public static readonly State3 Disabling = new("DISABLING");

    public static readonly State3 Disabled = new("DISABLED");

    public TResult Match<TResult>(Func<TResult> onAddonStateUnspecified,
        Func<TResult> onEnabling,
        Func<TResult> onEnabled,
        Func<TResult> onDisabling,
        Func<TResult> onDisabled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AddonStateUnspecified => onAddonStateUnspecified(),
            _ when this == Enabling => onEnabling(),
            _ when this == Enabled => onEnabled(),
            _ when this == Disabling => onDisabling(),
            _ when this == Disabled => onDisabled(),
            _ => otherwise(Value)
        };

    public void Match(Action onAddonStateUnspecified,
        Action onEnabling,
        Action onEnabled,
        Action onDisabling,
        Action onDisabled,
        Action<string> otherwise)
    {
        if (this == AddonStateUnspecified) onAddonStateUnspecified();
        else if (this == Enabling) onEnabling();
        else if (this == Enabled) onEnabled();
        else if (this == Disabling) onDisabling();
        else if (this == Disabled) onDisabled();
        else otherwise(Value);
    }
}
