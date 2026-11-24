using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Enum;

namespace AwsXRay.Models.Enums;

/// <summary>
/// The type of encryption. Set to KMS to use your own key for encryption. Set to NONE for default encryption.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 None = new("NONE");

    public static readonly Type1 Kms = new("KMS");

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
