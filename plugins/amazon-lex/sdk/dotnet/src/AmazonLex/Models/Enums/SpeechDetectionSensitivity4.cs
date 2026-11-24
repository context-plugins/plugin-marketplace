using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The updated sensitivity level for voice activity detection (VAD) in the bot locale.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SpeechDetectionSensitivity4>))]
public sealed record SpeechDetectionSensitivity4 : OpenStringEnum<SpeechDetectionSensitivity4>
{
    private SpeechDetectionSensitivity4(string value) : base(value)
    {
    }

    public static readonly SpeechDetectionSensitivity4 Default = new("Default");

    public static readonly SpeechDetectionSensitivity4 HighNoiseTolerance = new("HighNoiseTolerance");

    public static readonly SpeechDetectionSensitivity4 MaximumNoiseTolerance = new("MaximumNoiseTolerance");

    public TResult Match<TResult>(Func<TResult> onDefault,
        Func<TResult> onHighNoiseTolerance,
        Func<TResult> onMaximumNoiseTolerance,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Default => onDefault(),
            _ when this == HighNoiseTolerance => onHighNoiseTolerance(),
            _ when this == MaximumNoiseTolerance => onMaximumNoiseTolerance(),
            _ => otherwise(Value)
        };

    public void Match(Action onDefault,
        Action onHighNoiseTolerance,
        Action onMaximumNoiseTolerance,
        Action<string> otherwise)
    {
        if (this == Default) onDefault();
        else if (this == HighNoiseTolerance) onHighNoiseTolerance();
        else if (this == MaximumNoiseTolerance) onMaximumNoiseTolerance();
        else otherwise(Value);
    }
}
