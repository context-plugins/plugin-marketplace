using System;
using System.Text.Json.Serialization;
using Apigee.Core.Enum;

namespace Apigee.Models.Enums;

/// <summary>
/// Optional. Encryption type for the region. If the encryption type is CMEK, the cmek_key_name must be provided. If no encryption type is provided, GMEK will be used.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EncryptionType>))]
public sealed record EncryptionType : OpenStringEnum<EncryptionType>
{
    private EncryptionType(string value) : base(value)
    {
    }

    public static readonly EncryptionType EncryptionTypeUnspecified = new("ENCRYPTION_TYPE_UNSPECIFIED");

    public static readonly EncryptionType Gmek = new("GMEK");

    public static readonly EncryptionType Cmek = new("CMEK");

    public TResult Match<TResult>(Func<TResult> onEncryptionTypeUnspecified,
        Func<TResult> onGmek,
        Func<TResult> onCmek,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EncryptionTypeUnspecified => onEncryptionTypeUnspecified(),
            _ when this == Gmek => onGmek(),
            _ when this == Cmek => onCmek(),
            _ => otherwise(Value)
        };

    public void Match(Action onEncryptionTypeUnspecified, Action onGmek, Action onCmek, Action<string> otherwise)
    {
        if (this == EncryptionTypeUnspecified) onEncryptionTypeUnspecified();
        else if (this == Gmek) onGmek();
        else if (this == Cmek) onCmek();
        else otherwise(Value);
    }
}
