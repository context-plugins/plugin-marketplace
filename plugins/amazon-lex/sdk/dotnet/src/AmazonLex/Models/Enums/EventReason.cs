using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Indicates the type of user input that Amazon Lex V2 detected.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EventReason>))]
public sealed record EventReason : OpenStringEnum<EventReason>
{
    private EventReason(string value) : base(value)
    {
    }

    public static readonly EventReason DtmfStartDetected = new("DTMF_START_DETECTED");

    public static readonly EventReason TextDetected = new("TEXT_DETECTED");

    public static readonly EventReason VoiceStartDetected = new("VOICE_START_DETECTED");

    public TResult Match<TResult>(Func<TResult> onDtmfStartDetected,
        Func<TResult> onTextDetected,
        Func<TResult> onVoiceStartDetected,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DtmfStartDetected => onDtmfStartDetected(),
            _ when this == TextDetected => onTextDetected(),
            _ when this == VoiceStartDetected => onVoiceStartDetected(),
            _ => otherwise(Value)
        };

    public void Match(Action onDtmfStartDetected,
        Action onTextDetected,
        Action onVoiceStartDetected,
        Action<string> otherwise)
    {
        if (this == DtmfStartDetected) onDtmfStartDetected();
        else if (this == TextDetected) onTextDetected();
        else if (this == VoiceStartDetected) onVoiceStartDetected();
        else otherwise(Value);
    }
}
