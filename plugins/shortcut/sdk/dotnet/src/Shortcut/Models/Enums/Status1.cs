using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The health status of the Epic.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 AtRisk = new("At Risk");

    public static readonly Status1 OnTrack = new("On Track");

    public static readonly Status1 OffTrack = new("Off Track");

    public static readonly Status1 NoHealth = new("No Health");

    public TResult Match<TResult>(Func<TResult> onAtRisk,
        Func<TResult> onOnTrack,
        Func<TResult> onOffTrack,
        Func<TResult> onNoHealth,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AtRisk => onAtRisk(),
            _ when this == OnTrack => onOnTrack(),
            _ when this == OffTrack => onOffTrack(),
            _ when this == NoHealth => onNoHealth(),
            _ => otherwise(Value)
        };

    public void Match(Action onAtRisk, Action onOnTrack, Action onOffTrack, Action onNoHealth, Action<string> otherwise)
    {
        if (this == AtRisk) onAtRisk();
        else if (this == OnTrack) onOnTrack();
        else if (this == OffTrack) onOffTrack();
        else if (this == NoHealth) onNoHealth();
        else otherwise(Value);
    }
}
