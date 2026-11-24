using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Enum;

namespace AwsStorageGateway.Models.Enums;

/// <summary>
/// A value that specifies the type of server-side encryption that the file share will use for the data that it stores in Amazon S3. We recommend using EncryptionType instead of KMSEncrypted to set the file share encryption method. You do not need to provide values for both parameters. If values for both parameters exist in the same request, then the specified encryption methods must not conflict. For example, if EncryptionType is SseS3, then KMSEncrypted must be false. If EncryptionType is SseKms or DsseKms, then KMSEncrypted must be true.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EncryptionType>))]
public sealed record EncryptionType : OpenStringEnum<EncryptionType>
{
    private EncryptionType(string value) : base(value)
    {
    }

    public static readonly EncryptionType SseS3 = new("SseS3");

    public static readonly EncryptionType SseKms = new("SseKms");

    public static readonly EncryptionType DsseKms = new("DsseKms");

    public TResult Match<TResult>(Func<TResult> onSseS3,
        Func<TResult> onSseKms,
        Func<TResult> onDsseKms,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SseS3 => onSseS3(),
            _ when this == SseKms => onSseKms(),
            _ when this == DsseKms => onDsseKms(),
            _ => otherwise(Value)
        };

    public void Match(Action onSseS3, Action onSseKms, Action onDsseKms, Action<string> otherwise)
    {
        if (this == SseS3) onSseS3();
        else if (this == SseKms) onSseKms();
        else if (this == DsseKms) onDsseKms();
        else otherwise(Value);
    }
}
