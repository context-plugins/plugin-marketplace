using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The scaling type for a compute fleet.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ScalingType>))]
public sealed record ScalingType : OpenStringEnum<ScalingType>
{
    private ScalingType(string value) : base(value)
    {
    }

    public static readonly ScalingType TargetTrackingScaling = new("TARGET_TRACKING_SCALING");

    public TResult Match<TResult>(Func<TResult> onTargetTrackingScaling, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TargetTrackingScaling => onTargetTrackingScaling(),
            _ => otherwise(Value)
        };

    public void Match(Action onTargetTrackingScaling, Action<string> otherwise)
    {
        if (this == TargetTrackingScaling) onTargetTrackingScaling();
        else otherwise(Value);
    }
}
