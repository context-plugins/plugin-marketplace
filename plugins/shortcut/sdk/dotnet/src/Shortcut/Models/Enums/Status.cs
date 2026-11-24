using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

/// <summary>
/// The health status of the Epic or Objective.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status AtRisk = new("At Risk");

    public static readonly Status OnTrack = new("On Track");

    public static readonly Status OffTrack = new("Off Track");

    public static readonly Status NoHealth = new("No Health");

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
