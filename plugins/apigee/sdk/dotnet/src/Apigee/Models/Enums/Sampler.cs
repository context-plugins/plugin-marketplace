using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Sampler of distributed tracing. OFF is the default value.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Sampler>))]
public sealed record Sampler : OpenStringEnum<Sampler>
{
    private Sampler(string value) : base(value)
    {
    }

    public static readonly Sampler SamplerUnspecified = new("SAMPLER_UNSPECIFIED");

    public static readonly Sampler Off = new("OFF");

    public static readonly Sampler Probability = new("PROBABILITY");

    public TResult Match<TResult>(Func<TResult> onSamplerUnspecified,
        Func<TResult> onOff,
        Func<TResult> onProbability,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SamplerUnspecified => onSamplerUnspecified(),
            _ when this == Off => onOff(),
            _ when this == Probability => onProbability(),
            _ => otherwise(Value)
        };

    public void Match(Action onSamplerUnspecified, Action onOff, Action onProbability, Action<string> otherwise)
    {
        if (this == SamplerUnspecified) onSamplerUnspecified();
        else if (this == Off) onOff();
        else if (this == Probability) onProbability();
        else otherwise(Value);
    }
}
