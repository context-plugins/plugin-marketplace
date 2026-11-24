using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// The type of security strategy that was specified for file gateway. ClientSpecified: If you choose this option, requests are established based on what is negotiated by the client. This option is recommended when you want to maximize compatibility across different clients in your environment. Supported only for S3 File Gateway. MandatorySigning: If you choose this option, File Gateway only allows connections from SMBv2 or SMBv3 clients that have signing turned on. This option works with SMB clients on Microsoft Windows Vista, Windows Server 2008, or later. MandatoryEncryption: If you choose this
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SmbSecurityStrategy>))]
public sealed record SmbSecurityStrategy : OpenStringEnum<SmbSecurityStrategy>
{
    private SmbSecurityStrategy(string value) : base(value)
    {
    }

    public static readonly SmbSecurityStrategy ClientSpecified = new("ClientSpecified");

    public static readonly SmbSecurityStrategy MandatorySigning = new("MandatorySigning");

    public static readonly SmbSecurityStrategy MandatoryEncryption = new("MandatoryEncryption");

    public static readonly SmbSecurityStrategy MandatoryEncryptionNoAes128 = new("MandatoryEncryptionNoAes128");

    public TResult Match<TResult>(Func<TResult> onClientSpecified,
        Func<TResult> onMandatorySigning,
        Func<TResult> onMandatoryEncryption,
        Func<TResult> onMandatoryEncryptionNoAes128,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ClientSpecified => onClientSpecified(),
            _ when this == MandatorySigning => onMandatorySigning(),
            _ when this == MandatoryEncryption => onMandatoryEncryption(),
            _ when this == MandatoryEncryptionNoAes128 => onMandatoryEncryptionNoAes128(),
            _ => otherwise(Value)
        };

    public void Match(Action onClientSpecified,
        Action onMandatorySigning,
        Action onMandatoryEncryption,
        Action onMandatoryEncryptionNoAes128,
        Action<string> otherwise)
    {
        if (this == ClientSpecified) onClientSpecified();
        else if (this == MandatorySigning) onMandatorySigning();
        else if (this == MandatoryEncryption) onMandatoryEncryption();
        else if (this == MandatoryEncryptionNoAes128) onMandatoryEncryptionNoAes128();
        else otherwise(Value);
    }
}
