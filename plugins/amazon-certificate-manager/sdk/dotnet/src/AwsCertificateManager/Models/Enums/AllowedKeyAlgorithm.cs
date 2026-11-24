using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AllowedKeyAlgorithm>))]
public sealed record AllowedKeyAlgorithm : OpenStringEnum<AllowedKeyAlgorithm>
{
    private AllowedKeyAlgorithm(string value) : base(value)
    {
    }

    public static readonly AllowedKeyAlgorithm Rsa2048 = new("RSA_2048");

    public static readonly AllowedKeyAlgorithm EcPrime256V1 = new("EC_prime256v1");

    public static readonly AllowedKeyAlgorithm EcSecp384R1 = new("EC_secp384r1");

    public TResult Match<TResult>(Func<TResult> onRsa2048,
        Func<TResult> onEcPrime256V1,
        Func<TResult> onEcSecp384R1,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Rsa2048 => onRsa2048(),
            _ when this == EcPrime256V1 => onEcPrime256V1(),
            _ when this == EcSecp384R1 => onEcSecp384R1(),
            _ => otherwise(Value)
        };

    public void Match(Action onRsa2048, Action onEcPrime256V1, Action onEcSecp384R1, Action<string> otherwise)
    {
        if (this == Rsa2048) onRsa2048();
        else if (this == EcPrime256V1) onEcPrime256V1();
        else if (this == EcSecp384R1) onEcSecp384R1();
        else otherwise(Value);
    }
}
