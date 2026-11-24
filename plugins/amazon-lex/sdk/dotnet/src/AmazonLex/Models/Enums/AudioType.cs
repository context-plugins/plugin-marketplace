using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The identifier of the audio filler to play while Amazon Lex processes the user's input. This field is required when enabled is true.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AudioType>))]
public sealed record AudioType : OpenStringEnum<AudioType>
{
    private AudioType(string value) : base(value)
    {
    }

    public static readonly AudioType MelodyChipperChime = new("MELODY_CHIPPER_CHIME");

    public static readonly AudioType MelodyCuriousCrawl = new("MELODY_CURIOUS_CRAWL");

    public static readonly AudioType MelodyRisingRipple = new("MELODY_RISING_RIPPLE");

    public static readonly AudioType MelodyPatientPing = new("MELODY_PATIENT_PING");

    public static readonly AudioType MelodyPonderingPong = new("MELODY_PONDERING_PONG");

    public static readonly AudioType TypingKineticKeys = new("TYPING_KINETIC_KEYS");

    public static readonly AudioType TypingQuietQwerty = new("TYPING_QUIET_QWERTY");

    public TResult Match<TResult>(Func<TResult> onMelodyChipperChime,
        Func<TResult> onMelodyCuriousCrawl,
        Func<TResult> onMelodyRisingRipple,
        Func<TResult> onMelodyPatientPing,
        Func<TResult> onMelodyPonderingPong,
        Func<TResult> onTypingKineticKeys,
        Func<TResult> onTypingQuietQwerty,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MelodyChipperChime => onMelodyChipperChime(),
            _ when this == MelodyCuriousCrawl => onMelodyCuriousCrawl(),
            _ when this == MelodyRisingRipple => onMelodyRisingRipple(),
            _ when this == MelodyPatientPing => onMelodyPatientPing(),
            _ when this == MelodyPonderingPong => onMelodyPonderingPong(),
            _ when this == TypingKineticKeys => onTypingKineticKeys(),
            _ when this == TypingQuietQwerty => onTypingQuietQwerty(),
            _ => otherwise(Value)
        };

    public void Match(Action onMelodyChipperChime,
        Action onMelodyCuriousCrawl,
        Action onMelodyRisingRipple,
        Action onMelodyPatientPing,
        Action onMelodyPonderingPong,
        Action onTypingKineticKeys,
        Action onTypingQuietQwerty,
        Action<string> otherwise)
    {
        if (this == MelodyChipperChime) onMelodyChipperChime();
        else if (this == MelodyCuriousCrawl) onMelodyCuriousCrawl();
        else if (this == MelodyRisingRipple) onMelodyRisingRipple();
        else if (this == MelodyPatientPing) onMelodyPatientPing();
        else if (this == MelodyPonderingPong) onMelodyPonderingPong();
        else if (this == TypingKineticKeys) onTypingKineticKeys();
        else if (this == TypingQuietQwerty) onTypingQuietQwerty();
        else otherwise(Value);
    }
}
