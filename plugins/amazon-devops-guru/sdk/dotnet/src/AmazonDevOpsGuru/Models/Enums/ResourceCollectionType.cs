using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ResourceCollectionType>))]
public sealed record ResourceCollectionType : OpenStringEnum<ResourceCollectionType>
{
    private ResourceCollectionType(string value) : base(value)
    {
    }

    public static readonly ResourceCollectionType AwsCloudFormation = new("AWS_CLOUD_FORMATION");

    public static readonly ResourceCollectionType AwsService = new("AWS_SERVICE");

    public static readonly ResourceCollectionType AwsTags = new("AWS_TAGS");

    public TResult Match<TResult>(Func<TResult> onAwsCloudFormation,
        Func<TResult> onAwsService,
        Func<TResult> onAwsTags,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwsCloudFormation => onAwsCloudFormation(),
            _ when this == AwsService => onAwsService(),
            _ when this == AwsTags => onAwsTags(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwsCloudFormation, Action onAwsService, Action onAwsTags, Action<string> otherwise)
    {
        if (this == AwsCloudFormation) onAwsCloudFormation();
        else if (this == AwsService) onAwsService();
        else if (this == AwsTags) onAwsTags();
        else otherwise(Value);
    }
}
