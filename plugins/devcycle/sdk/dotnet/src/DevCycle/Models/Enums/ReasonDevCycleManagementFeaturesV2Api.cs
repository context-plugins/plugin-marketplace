using System;
using System.Text.Json.Serialization;
using DevCycle.Core.Enum;

namespace DevCycle.Models.Enums;

/// <summary>
/// Reason for staleness
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ReasonDevCycleManagementFeaturesV2Api>))]
public sealed record ReasonDevCycleManagementFeaturesV2Api : OpenStringEnum<ReasonDevCycleManagementFeaturesV2Api>
{
    private ReasonDevCycleManagementFeaturesV2Api(string value) : base(value)
    {
    }

    public static readonly ReasonDevCycleManagementFeaturesV2Api Released = new("released");

    public static readonly ReasonDevCycleManagementFeaturesV2Api Unused = new("unused");

    public static readonly ReasonDevCycleManagementFeaturesV2Api UnmodifiedShort = new("unmodifiedShort");

    public static readonly ReasonDevCycleManagementFeaturesV2Api UnmodifiedLong = new("unmodifiedLong");

    public TResult Match<TResult>(Func<TResult> onReleased,
        Func<TResult> onUnused,
        Func<TResult> onUnmodifiedShort,
        Func<TResult> onUnmodifiedLong,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Released => onReleased(),
            _ when this == Unused => onUnused(),
            _ when this == UnmodifiedShort => onUnmodifiedShort(),
            _ when this == UnmodifiedLong => onUnmodifiedLong(),
            _ => otherwise(Value)
        };

    public void Match(Action onReleased,
        Action onUnused,
        Action onUnmodifiedShort,
        Action onUnmodifiedLong,
        Action<string> otherwise)
    {
        if (this == Released) onReleased();
        else if (this == Unused) onUnused();
        else if (this == UnmodifiedShort) onUnmodifiedShort();
        else if (this == UnmodifiedLong) onUnmodifiedLong();
        else otherwise(Value);
    }
}
