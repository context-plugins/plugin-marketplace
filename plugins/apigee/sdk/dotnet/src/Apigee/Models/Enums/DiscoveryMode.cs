using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Output only. Discovery mode of the dependency.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DiscoveryMode>))]
public sealed record DiscoveryMode : OpenStringEnum<DiscoveryMode>
{
    private DiscoveryMode(string value) : base(value)
    {
    }

    public static readonly DiscoveryMode DiscoveryModeUnspecified = new("DISCOVERY_MODE_UNSPECIFIED");

    public static readonly DiscoveryMode Manual = new("MANUAL");

    public TResult Match<TResult>(Func<TResult> onDiscoveryModeUnspecified,
        Func<TResult> onManual,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DiscoveryModeUnspecified => onDiscoveryModeUnspecified(),
            _ when this == Manual => onManual(),
            _ => otherwise(Value)
        };

    public void Match(Action onDiscoveryModeUnspecified, Action onManual, Action<string> otherwise)
    {
        if (this == DiscoveryModeUnspecified) onDiscoveryModeUnspecified();
        else if (this == Manual) onManual();
        else otherwise(Value);
    }
}
