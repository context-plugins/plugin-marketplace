using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// Encryption type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum AwsOwnedKey = new("AWS_OWNED_KEY");

    public static readonly TypeEnum CustomerManagedKmsKey = new("CUSTOMER_MANAGED_KMS_KEY");

    public TResult Match<TResult>(Func<TResult> onAwsOwnedKey,
        Func<TResult> onCustomerManagedKmsKey,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsOwnedKey => onAwsOwnedKey(),
            _ when this == CustomerManagedKmsKey => onCustomerManagedKmsKey(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsOwnedKey, Action onCustomerManagedKmsKey, Action<string> otherwise)
    {
        if (this == AwsOwnedKey) onAwsOwnedKey();
        else if (this == CustomerManagedKmsKey) onCustomerManagedKmsKey();
        else otherwise(Value);
    }
}
