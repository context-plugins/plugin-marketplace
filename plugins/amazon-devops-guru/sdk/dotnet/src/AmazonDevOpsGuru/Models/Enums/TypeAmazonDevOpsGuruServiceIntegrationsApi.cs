using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The type of KMS key used. Customer managed keys are the KMS keys that you create. Amazon Web Services owned keys are keys that are owned and managed by DevOps Guru.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAmazonDevOpsGuruServiceIntegrationsApi>))]
public sealed record TypeAmazonDevOpsGuruServiceIntegrationsApi : OpenStringEnum<TypeAmazonDevOpsGuruServiceIntegrationsApi>
{
    private TypeAmazonDevOpsGuruServiceIntegrationsApi(string value) : base(value)
    {
    }

    public static readonly TypeAmazonDevOpsGuruServiceIntegrationsApi CustomerManagedKey = new("CUSTOMER_MANAGED_KEY");

    public static readonly TypeAmazonDevOpsGuruServiceIntegrationsApi AwsOwnedKmsKey = new("AWS_OWNED_KMS_KEY");

    public TResult Match<TResult>(Func<TResult> onCustomerManagedKey,
        Func<TResult> onAwsOwnedKmsKey,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CustomerManagedKey => onCustomerManagedKey(),
            _ when this == AwsOwnedKmsKey => onAwsOwnedKmsKey(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustomerManagedKey, Action onAwsOwnedKmsKey, Action<string> otherwise)
    {
        if (this == CustomerManagedKey) onCustomerManagedKey();
        else if (this == AwsOwnedKmsKey) onAwsOwnedKmsKey();
        else otherwise(Value);
    }
}
