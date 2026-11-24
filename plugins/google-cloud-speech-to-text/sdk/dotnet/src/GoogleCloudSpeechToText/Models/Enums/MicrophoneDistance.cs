using System;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Enum;

namespace GoogleCloudSpeechToText.Models.Enums;

/// <summary>
/// The audio type that most closely describes the audio being recognized.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MicrophoneDistance>))]
public sealed record MicrophoneDistance : OpenStringEnum<MicrophoneDistance>
{
    private MicrophoneDistance(string value) : base(value)
    {
    }

    public static readonly MicrophoneDistance MicrophoneDistanceUnspecified = new("MICROPHONE_DISTANCE_UNSPECIFIED");

    public static readonly MicrophoneDistance Nearfield = new("NEARFIELD");

    public static readonly MicrophoneDistance Midfield = new("MIDFIELD");

    public static readonly MicrophoneDistance Farfield = new("FARFIELD");

    public TResult Match<TResult>(Func<TResult> onMicrophoneDistanceUnspecified,
        Func<TResult> onNearfield,
        Func<TResult> onMidfield,
        Func<TResult> onFarfield,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MicrophoneDistanceUnspecified => onMicrophoneDistanceUnspecified(),
            _ when this == Nearfield => onNearfield(),
            _ when this == Midfield => onMidfield(),
            _ when this == Farfield => onFarfield(),
            _ => otherwise(Value)
        };

    public void Match(Action onMicrophoneDistanceUnspecified,
        Action onNearfield,
        Action onMidfield,
        Action onFarfield,
        Action<string> otherwise)
    {
        if (this == MicrophoneDistanceUnspecified) onMicrophoneDistanceUnspecified();
        else if (this == Nearfield) onNearfield();
        else if (this == Midfield) onMidfield();
        else if (this == Farfield) onFarfield();
        else otherwise(Value);
    }
}
