using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Enum;

namespace AwsXRay.Models.Enums;

/// <summary>
/// The type of encryption. Set to KMS for encryption with KMS keys. Set to NONE for default encryption.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum None = new("NONE");

    public static readonly TypeEnum Kms = new("KMS");

    public TResult Match<TResult>(Func<TResult> onNone, Func<TResult> onKms, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Kms => onKms(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone, Action onKms, Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Kms) onKms();
        else otherwise(Value);
    }
}
