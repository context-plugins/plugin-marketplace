using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// Encryption type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1AwsStepFunctionsStateMachinesApi>))]
public sealed record Type1AwsStepFunctionsStateMachinesApi : OpenStringEnum<Type1AwsStepFunctionsStateMachinesApi>
{
    private Type1AwsStepFunctionsStateMachinesApi(string value) : base(value)
    {
    }

    public static readonly Type1AwsStepFunctionsStateMachinesApi AwsOwnedKey = new("AWS_OWNED_KEY");

    public static readonly Type1AwsStepFunctionsStateMachinesApi CustomerManagedKmsKey = new(
        "CUSTOMER_MANAGED_KMS_KEY");

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
