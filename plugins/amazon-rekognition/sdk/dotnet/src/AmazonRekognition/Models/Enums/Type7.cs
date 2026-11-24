using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// The type of a segment (technical cue or shot detection).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type7>))]
public sealed record Type7 : OpenStringEnum<Type7>
{
    private Type7(string value) : base(value)
    {
    }

    public static readonly Type7 TechnicalCue = new("TECHNICAL_CUE");

    public static readonly Type7 Shot = new("SHOT");

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
