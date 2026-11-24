using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag key. You can specify up to 500 Amazon Web Services CloudFormation stacks.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OrganizationResourceCollectionType>))]
public sealed record OrganizationResourceCollectionType : OpenStringEnum<OrganizationResourceCollectionType>
{
    private OrganizationResourceCollectionType(string value) : base(value)
    {
    }

    public static readonly OrganizationResourceCollectionType AwsCloudFormation = new("AWS_CLOUD_FORMATION");

    public static readonly OrganizationResourceCollectionType AwsService = new("AWS_SERVICE");

    public static readonly OrganizationResourceCollectionType AwsAccount = new("AWS_ACCOUNT");

    public static readonly OrganizationResourceCollectionType AwsTags = new("AWS_TAGS");

    public TResult Match<TResult>(Func<TResult> onAwsCloudFormation,
        Func<TResult> onAwsService,
        Func<TResult> onAwsAccount,
        Func<TResult> onAwsTags,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsCloudFormation => onAwsCloudFormation(),
            _ when this == AwsService => onAwsService(),
            _ when this == AwsAccount => onAwsAccount(),
            _ when this == AwsTags => onAwsTags(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsCloudFormation,
        Action onAwsService,
        Action onAwsAccount,
        Action onAwsTags,
        Action<string> otherwise)
    {
        if (this == AwsCloudFormation) onAwsCloudFormation();
        else if (this == AwsService) onAwsService();
        else if (this == AwsAccount) onAwsAccount();
        else if (this == AwsTags) onAwsTags();
        else otherwise(Value);
    }
}
