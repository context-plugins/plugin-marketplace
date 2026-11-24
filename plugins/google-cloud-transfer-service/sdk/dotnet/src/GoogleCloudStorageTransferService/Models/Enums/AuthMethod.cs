using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

/// <summary>
/// Specifies the authentication and authorization method used by the storage service. When not specified, Transfer Service will attempt to determine right auth method to use.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AuthMethod>))]
public sealed record AuthMethod : OpenStringEnum<AuthMethod>
{
    private AuthMethod(string value) : base(value)
    {
    }

    public static readonly AuthMethod AuthMethodUnspecified = new("AUTH_METHOD_UNSPECIFIED");

    public static readonly AuthMethod AuthMethodAwsSignatureV4 = new("AUTH_METHOD_AWS_SIGNATURE_V4");

    public static readonly AuthMethod AuthMethodAwsSignatureV2 = new("AUTH_METHOD_AWS_SIGNATURE_V2");

    public TResult Match<TResult>(Func<TResult> onAuthMethodUnspecified,
        Func<TResult> onAuthMethodAwsSignatureV4,
        Func<TResult> onAuthMethodAwsSignatureV2,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AuthMethodUnspecified => onAuthMethodUnspecified(),
            _ when this == AuthMethodAwsSignatureV4 => onAuthMethodAwsSignatureV4(),
            _ when this == AuthMethodAwsSignatureV2 => onAuthMethodAwsSignatureV2(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuthMethodUnspecified,
        Action onAuthMethodAwsSignatureV4,
        Action onAuthMethodAwsSignatureV2,
        Action<string> otherwise)
    {
        if (this == AuthMethodUnspecified) onAuthMethodUnspecified();
        else if (this == AuthMethodAwsSignatureV4) onAuthMethodAwsSignatureV4();
        else if (this == AuthMethodAwsSignatureV2) onAuthMethodAwsSignatureV2();
        else otherwise(Value);
    }
}
