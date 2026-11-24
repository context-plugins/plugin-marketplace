using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The type of the segment. Valid values are TECHNICAL_CUE and SHOT.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type5>))]
public sealed record Type5 : OpenStringEnum<Type5>
{
    private Type5(string value) : base(value)
    {
    }

    public static readonly Type5 TechnicalCue = new("TECHNICAL_CUE");

    public static readonly Type5 Shot = new("SHOT");

    public TResult Match<TResult>(Func<TResult> onTechnicalCue,
        Func<TResult> onShot,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TechnicalCue => onTechnicalCue(),
            _ when this == Shot => onShot(),
            _ => otherwise(Value)
        };

    public void Match(Action onTechnicalCue, Action onShot, Action<string> otherwise)
    {
        if (this == TechnicalCue) onTechnicalCue();
        else if (this == Shot) onShot();
        else otherwise(Value);
    }
}
