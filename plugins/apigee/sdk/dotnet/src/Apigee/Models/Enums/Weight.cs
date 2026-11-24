using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// The weight of the assessment.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Weight>))]
public sealed record Weight : OpenStringEnum<Weight>
{
    private Weight(string value) : base(value)
    {
    }

    public static readonly Weight WeightUnspecified = new("WEIGHT_UNSPECIFIED");

    public static readonly Weight Minor = new("MINOR");

    public static readonly Weight Moderate = new("MODERATE");

    public static readonly Weight Major = new("MAJOR");

    public TResult Match<TResult>(Func<TResult> onWeightUnspecified,
        Func<TResult> onMinor,
        Func<TResult> onModerate,
        Func<TResult> onMajor,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == WeightUnspecified => onWeightUnspecified(),
            _ when this == Minor => onMinor(),
            _ when this == Moderate => onModerate(),
            _ when this == Major => onMajor(),
            _ => otherwise(Value)
        };

    public void Match(Action onWeightUnspecified,
        Action onMinor,
        Action onModerate,
        Action onMajor,
        Action<string> otherwise)
    {
        if (this == WeightUnspecified) onWeightUnspecified();
        else if (this == Minor) onMinor();
        else if (this == Moderate) onModerate();
        else if (this == Major) onMajor();
        else otherwise(Value);
    }
}
