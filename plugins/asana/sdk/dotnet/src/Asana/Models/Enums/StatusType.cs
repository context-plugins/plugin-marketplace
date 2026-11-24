using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The type associated with the status update. This represents the current state of the object this object is on.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusType>))]
public sealed record StatusType : OpenStringEnum<StatusType>
{
    private StatusType(string value) : base(value)
    {
    }

    public static readonly StatusType OnTrack = new("on_track");

    public static readonly StatusType AtRisk = new("at_risk");

    public static readonly StatusType OffTrack = new("off_track");

    public static readonly StatusType OnHold = new("on_hold");

    public static readonly StatusType Complete = new("complete");

    public static readonly StatusType Achieved = new("achieved");

    public static readonly StatusType Partial = new("partial");

    public static readonly StatusType Missed = new("missed");

    public static readonly StatusType Dropped = new("dropped");

    public TResult Match<TResult>(Func<TResult> onOnTrack,
        Func<TResult> onAtRisk,
        Func<TResult> onOffTrack,
        Func<TResult> onOnHold,
        Func<TResult> onComplete,
        Func<TResult> onAchieved,
        Func<TResult> onPartial,
        Func<TResult> onMissed,
        Func<TResult> onDropped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OnTrack => onOnTrack(),
            _ when this == AtRisk => onAtRisk(),
            _ when this == OffTrack => onOffTrack(),
            _ when this == OnHold => onOnHold(),
            _ when this == Complete => onComplete(),
            _ when this == Achieved => onAchieved(),
            _ when this == Partial => onPartial(),
            _ when this == Missed => onMissed(),
            _ when this == Dropped => onDropped(),
            _ => otherwise(Value)
        };

    public void Match(Action onOnTrack,
        Action onAtRisk,
        Action onOffTrack,
        Action onOnHold,
        Action onComplete,
        Action onAchieved,
        Action onPartial,
        Action onMissed,
        Action onDropped,
        Action<string> otherwise)
    {
        if (this == OnTrack) onOnTrack();
        else if (this == AtRisk) onAtRisk();
        else if (this == OffTrack) onOffTrack();
        else if (this == OnHold) onOnHold();
        else if (this == Complete) onComplete();
        else if (this == Achieved) onAchieved();
        else if (this == Partial) onPartial();
        else if (this == Missed) onMissed();
        else if (this == Dropped) onDropped();
        else otherwise(Value);
    }
}
