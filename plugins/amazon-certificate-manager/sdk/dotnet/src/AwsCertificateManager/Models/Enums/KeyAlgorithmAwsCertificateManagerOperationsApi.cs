using System;
using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Enum;

namespace AwsCertificateManager.Models.Enums;

/// <summary>
/// Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data. RSA is the default key algorithm for ACM certificates. Elliptic Curve Digital Signature Algorithm (ECDSA) keys are smaller, offering security comparable to RSA keys but with greater computing efficiency. However, ECDSA is not supported by all network clients. Some Amazon Web Services services may require RSA keys, or only support ECDSA keys of a particular size, while others allow the use of either RSA and ECDSA keys to ensure that compatibility is not broken. Check the requirements for the A
/// </summary>
[JsonConverter(typeof(StringEnumConverter<KeyAlgorithmAwsCertificateManagerOperationsApi>))]
public sealed record KeyAlgorithmAwsCertificateManagerOperationsApi : OpenStringEnum<KeyAlgorithmAwsCertificateManagerOperationsApi>
{
    private KeyAlgorithmAwsCertificateManagerOperationsApi(string value) : base(value)
    {
    }

    public static readonly KeyAlgorithmAwsCertificateManagerOperationsApi Rsa1024 = new("RSA_1024");

    public static readonly KeyAlgorithmAwsCertificateManagerOperationsApi Rsa2048 = new("RSA_2048");

    public static readonly KeyAlgorithmAwsCertificateManagerOperationsApi Rsa3072 = new("RSA_3072");

    public static readonly KeyAlgorithmAwsCertificateManagerOperationsApi Rsa4096 = new("RSA_4096");

    public static readonly KeyAlgorithmAwsCertificateManagerOperationsApi EcPrime256V1 = new("EC_prime256v1");

    public static readonly KeyAlgorithmAwsCertificateManagerOperationsApi EcSecp384R1 = new("EC_secp384r1");

    public static readonly KeyAlgorithmAwsCertificateManagerOperationsApi EcSecp521R1 = new("EC_secp521r1");

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
