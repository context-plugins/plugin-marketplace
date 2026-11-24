using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonSimpleQueueServicePermissionsApi>))]
public sealed record XAmzTargetAmazonSimpleQueueServicePermissionsApi : OpenStringEnum<XAmzTargetAmazonSimpleQueueServicePermissionsApi>
{
    private XAmzTargetAmazonSimpleQueueServicePermissionsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonSimpleQueueServicePermissionsApi AmazonSqsAddPermission = new(
        "AmazonSQS.AddPermission");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsAddPermission, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsAddPermission => onAmazonSqsAddPermission(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsAddPermission, Action<string> otherwise)
    {
        if (this == AmazonSqsAddPermission) onAmazonSqsAddPermission();
        else otherwise(Value);
    }
}
