using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. The hardware class of the instances. This is a create-time specification and is not currently mutable via update masks.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<HardwareClass>))]
public sealed record HardwareClass : OpenStringEnum<HardwareClass>
{
    private HardwareClass(string value) : base(value)
    {
    }

    public static readonly HardwareClass HardwareClassUnspecified = new("HARDWARE_CLASS_UNSPECIFIED");

    public static readonly HardwareClass Standard = new("STANDARD");

    public static readonly HardwareClass Performance = new("PERFORMANCE");

    public TResult Match<TResult>(Func<TResult> onHardwareClassUnspecified,
        Func<TResult> onStandard,
        Func<TResult> onPerformance,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == HardwareClassUnspecified => onHardwareClassUnspecified(),
            _ when this == Standard => onStandard(),
            _ when this == Performance => onPerformance(),
            _ => otherwise(Value)
        };

    public void Match(Action onHardwareClassUnspecified,
        Action onStandard,
        Action onPerformance,
        Action<string> otherwise)
    {
        if (this == HardwareClassUnspecified) onHardwareClassUnspecified();
        else if (this == Standard) onStandard();
        else if (this == Performance) onPerformance();
        else otherwise(Value);
    }
}
