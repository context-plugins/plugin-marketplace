using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The sensitivity level for voice activity detection (VAD) in the bot locale. This setting helps optimize speech recognition accuracy by adjusting how the system responds to background noise during voice interactions.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SpeechDetectionSensitivity>))]
public sealed record SpeechDetectionSensitivity : OpenStringEnum<SpeechDetectionSensitivity>
{
    private SpeechDetectionSensitivity(string value) : base(value)
    {
    }

    public static readonly SpeechDetectionSensitivity Default = new("Default");

    public static readonly SpeechDetectionSensitivity HighNoiseTolerance = new("HighNoiseTolerance");

    public static readonly SpeechDetectionSensitivity MaximumNoiseTolerance = new("MaximumNoiseTolerance");

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
