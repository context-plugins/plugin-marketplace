using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

/// <summary>
/// The style of the gradient. Can be either linear or radial.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Style>))]
public sealed record Style : OpenStringEnum<Style>
{
    private Style(string value) : base(value)
    {
    }

    public static readonly Style NoGradient = new("no_gradient");

    public static readonly Style Linear = new("linear");

    public static readonly Style Radial = new("radial");

    public TResult Match<TResult>(Func<TResult> onNoGradient,
        Func<TResult> onLinear,
        Func<TResult> onRadial,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NoGradient => onNoGradient(),
            _ when this == Linear => onLinear(),
            _ when this == Radial => onRadial(),
            _ => otherwise(Value)
        };

    public void Match(Action onNoGradient, Action onLinear, Action onRadial, Action<string> otherwise)
    {
        if (this == NoGradient) onNoGradient();
        else if (this == Linear) onLinear();
        else if (this == Radial) onRadial();
        else otherwise(Value);
    }
}
