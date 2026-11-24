using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The type of payee.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PayeeType>))]
public sealed record PayeeType : OpenStringEnum<PayeeType>
{
    private PayeeType(string value) : base(value)
    {
    }

    public static readonly PayeeType Domestic = new("domestic");

    public static readonly PayeeType Biller = new("biller");

    public static readonly PayeeType International = new("international");

    public static readonly PayeeType DigitalWallet = new("digitalWallet");

    public TResult Match<TResult>(Func<TResult> onDomestic,
        Func<TResult> onBiller,
        Func<TResult> onInternational,
        Func<TResult> onDigitalWallet,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Domestic => onDomestic(),
            _ when this == Biller => onBiller(),
            _ when this == International => onInternational(),
            _ when this == DigitalWallet => onDigitalWallet(),
            _ => otherwise(Value)
        };

    public void Match(Action onDomestic,
        Action onBiller,
        Action onInternational,
        Action onDigitalWallet,
        Action<string> otherwise)
    {
        if (this == Domestic) onDomestic();
        else if (this == Biller) onBiller();
        else if (this == International) onInternational();
        else if (this == DigitalWallet) onDigitalWallet();
        else otherwise(Value);
    }
}
