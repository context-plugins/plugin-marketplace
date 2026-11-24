using System;
using System.Text.Json.Serialization;
using Skribble.Core.Enum;

namespace Skribble.Models.Enums;

/// <summary>
/// Minimal quality of the signatures for this signature request.
/// <para>
/// | Quality | Description |
/// | --- | --- |
/// | <b>QES</b> | Every signer must use QES. This is the <b>default</b> quality. Requires a <c>legislation</c> parameter. |
/// | <b>AES_MINIMAL</b> | Signers will use QES if available, otherwise AES. At least AES is guaranteed. Requires a <c>legislation</c> parameter. |
/// | <b>AES</b> | Every signer uses AES. |
/// | <b>SES</b> | Every signer uses SES. |
/// | <b>DEMO</b> | Every signer uses a DEMO signature with <b>no legal binding</b>. API demo users (<c>api_demo_example_*</c>) get this quality by default. |
/// | <b>PART11</b> | Signers use a signature compliant with 21 CFR Part 11 regulations. |
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SignatureQuality>))]
public sealed record SignatureQuality : OpenStringEnum<SignatureQuality>
{
    private SignatureQuality(string value) : base(value)
    {
    }

    public static readonly SignatureQuality Ses = new("SES");

    public static readonly SignatureQuality Aes = new("AES");

    public static readonly SignatureQuality AesMinimal = new("AES_MINIMAL");

    public static readonly SignatureQuality Qes = new("QES");

    public static readonly SignatureQuality Demo = new("DEMO");

    public static readonly SignatureQuality Part11 = new("PART11");

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
