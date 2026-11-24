using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Required. Only an ENABLED SecurityAction is enforced. An ENABLED SecurityAction past its expiration time will not be enforced.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State6>))]
public sealed record State6 : OpenStringEnum<State6>
{
    private State6(string value) : base(value)
    {
    }

    public static readonly State6 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State6 Enabled = new("ENABLED");

    public static readonly State6 Disabled = new("DISABLED");

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
