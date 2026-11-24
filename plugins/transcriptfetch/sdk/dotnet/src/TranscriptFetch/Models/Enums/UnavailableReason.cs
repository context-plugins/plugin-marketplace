using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

/// <summary>
/// Present when available is false: why AI transcription cannot be used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<UnavailableReason>))]
public sealed record UnavailableReason : OpenStringEnum<UnavailableReason>
{
    private UnavailableReason(string value) : base(value)
    {
    }

    public static readonly UnavailableReason UnsupportedInput = new("unsupported_input");

    public static readonly UnavailableReason NoSpeechToTranscribe = new("no_speech_to_transcribe");

    public static readonly UnavailableReason ContentInaccessible = new("content_inaccessible");

    public static readonly UnavailableReason RetryCaptionsFirst = new("retry_captions_first");

    public static readonly UnavailableReason InsufficientCredits = new("insufficient_credits");

    public TResult Match<TResult>(Func<TResult> onUnsupportedInput,
        Func<TResult> onNoSpeechToTranscribe,
        Func<TResult> onContentInaccessible,
        Func<TResult> onRetryCaptionsFirst,
        Func<TResult> onInsufficientCredits,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UnsupportedInput => onUnsupportedInput(),
            _ when this == NoSpeechToTranscribe => onNoSpeechToTranscribe(),
            _ when this == ContentInaccessible => onContentInaccessible(),
            _ when this == RetryCaptionsFirst => onRetryCaptionsFirst(),
            _ when this == InsufficientCredits => onInsufficientCredits(),
            _ => otherwise(Value)
        };

    public void Match(Action onUnsupportedInput,
        Action onNoSpeechToTranscribe,
        Action onContentInaccessible,
        Action onRetryCaptionsFirst,
        Action onInsufficientCredits,
        Action<string> otherwise)
    {
        if (this == UnsupportedInput) onUnsupportedInput();
        else if (this == NoSpeechToTranscribe) onNoSpeechToTranscribe();
        else if (this == ContentInaccessible) onContentInaccessible();
        else if (this == RetryCaptionsFirst) onRetryCaptionsFirst();
        else if (this == InsufficientCredits) onInsufficientCredits();
        else otherwise(Value);
    }
}
