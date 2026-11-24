using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The speech-to-text model to use.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SpeechModelPreference>))]
public sealed record SpeechModelPreference : OpenStringEnum<SpeechModelPreference>
{
    private SpeechModelPreference(string value) : base(value)
    {
    }

    public static readonly SpeechModelPreference Standard = new("Standard");

    public static readonly SpeechModelPreference Neural = new("Neural");

    public static readonly SpeechModelPreference Deepgram = new("Deepgram");

    public static readonly SpeechModelPreference Advanced = new("Advanced");

    public TResult Match<TResult>(Func<TResult> onStandard,
        Func<TResult> onNeural,
        Func<TResult> onDeepgram,
        Func<TResult> onAdvanced,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Standard => onStandard(),
            _ when this == Neural => onNeural(),
            _ when this == Deepgram => onDeepgram(),
            _ when this == Advanced => onAdvanced(),
            _ => otherwise(Value)
        };

    public void Match(Action onStandard,
        Action onNeural,
        Action onDeepgram,
        Action onAdvanced,
        Action<string> otherwise)
    {
        if (this == Standard) onStandard();
        else if (this == Neural) onNeural();
        else if (this == Deepgram) onDeepgram();
        else if (this == Advanced) onAdvanced();
        else otherwise(Value);
    }
}
