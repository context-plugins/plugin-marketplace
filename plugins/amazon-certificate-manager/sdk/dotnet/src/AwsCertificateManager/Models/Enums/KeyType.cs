using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<KeyType>))]
public sealed record KeyType : OpenStringEnum<KeyType>
{
    private KeyType(string value) : base(value)
    {
    }

    public static readonly KeyType Rsa1024 = new("RSA_1024");

    public static readonly KeyType Rsa2048 = new("RSA_2048");

    public static readonly KeyType Rsa3072 = new("RSA_3072");

    public static readonly KeyType Rsa4096 = new("RSA_4096");

    public static readonly KeyType EcPrime256V1 = new("EC_prime256v1");

    public static readonly KeyType EcSecp384R1 = new("EC_secp384r1");

    public static readonly KeyType EcSecp521R1 = new("EC_secp521r1");

    public TResult Match<TResult>(Func<TResult> onRsa1024,
        Func<TResult> onRsa2048,
        Func<TResult> onRsa3072,
        Func<TResult> onRsa4096,
        Func<TResult> onEcPrime256V1,
        Func<TResult> onEcSecp384R1,
        Func<TResult> onEcSecp521R1,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Rsa1024 => onRsa1024(),
            _ when this == Rsa2048 => onRsa2048(),
            _ when this == Rsa3072 => onRsa3072(),
            _ when this == Rsa4096 => onRsa4096(),
            _ when this == EcPrime256V1 => onEcPrime256V1(),
            _ when this == EcSecp384R1 => onEcSecp384R1(),
            _ when this == EcSecp521R1 => onEcSecp521R1(),
            _ => otherwise(Value)
        };

    public void Match(Action onRsa1024,
        Action onRsa2048,
        Action onRsa3072,
        Action onRsa4096,
        Action onEcPrime256V1,
        Action onEcSecp384R1,
        Action onEcSecp521R1,
        Action<string> otherwise)
    {
        if (this == Rsa1024) onRsa1024();
        else if (this == Rsa2048) onRsa2048();
        else if (this == Rsa3072) onRsa3072();
        else if (this == Rsa4096) onRsa4096();
        else if (this == EcPrime256V1) onEcPrime256V1();
        else if (this == EcSecp384R1) onEcSecp384R1();
        else if (this == EcSecp521R1) onEcSecp521R1();
        else otherwise(Value);
    }
}
