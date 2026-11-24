using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

/// <summary>
/// The actual quality of this signer's signature. Only present after signing.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SignatureQuality2>))]
public sealed record SignatureQuality2 : OpenStringEnum<SignatureQuality2>
{
    private SignatureQuality2(string value) : base(value)
    {
    }

    public static readonly SignatureQuality2 Ses = new("SES");

    public static readonly SignatureQuality2 Aes = new("AES");

    public static readonly SignatureQuality2 AesMinimal = new("AES_MINIMAL");

    public static readonly SignatureQuality2 Qes = new("QES");

    public static readonly SignatureQuality2 Demo = new("DEMO");

    public static readonly SignatureQuality2 Part11 = new("PART11");

    public TResult Match<TResult>(Func<TResult> onSes,
        Func<TResult> onAes,
        Func<TResult> onAesMinimal,
        Func<TResult> onQes,
        Func<TResult> onDemo,
        Func<TResult> onPart11,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ses => onSes(),
            _ when this == Aes => onAes(),
            _ when this == AesMinimal => onAesMinimal(),
            _ when this == Qes => onQes(),
            _ when this == Demo => onDemo(),
            _ when this == Part11 => onPart11(),
            _ => otherwise(Value)
        };

    public void Match(Action onSes,
        Action onAes,
        Action onAesMinimal,
        Action onQes,
        Action onDemo,
        Action onPart11,
        Action<string> otherwise)
    {
        if (this == Ses) onSes();
        else if (this == Aes) onAes();
        else if (this == AesMinimal) onAesMinimal();
        else if (this == Qes) onQes();
        else if (this == Demo) onDemo();
        else if (this == Part11) onPart11();
        else otherwise(Value);
    }
}
