using System;
using System.Text.Json.Serialization;
using AmazonSqs.Core.Enum;

namespace AmazonSqs.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonSimpleQueueServicePermissionsApi>))]
public sealed record XAmzTarget1AmazonSimpleQueueServicePermissionsApi : OpenStringEnum<XAmzTarget1AmazonSimpleQueueServicePermissionsApi>
{
    private XAmzTarget1AmazonSimpleQueueServicePermissionsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonSimpleQueueServicePermissionsApi AmazonSqsRemovePermission = new(
        "AmazonSQS.RemovePermission");

    public TResult Match<TResult>(Func<TResult> onAmazonSqsRemovePermission, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AmazonSqsRemovePermission => onAmazonSqsRemovePermission(),
            _ => otherwise(Value)
        };

    public void Match(Action onAmazonSqsRemovePermission, Action<string> otherwise)
    {
        if (this == AmazonSqsRemovePermission) onAmazonSqsRemovePermission();
        else otherwise(Value);
    }
}
