using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget49>))]
public sealed record XAmzTarget49 : OpenStringEnum<XAmzTarget49>
{
    private XAmzTarget49(string value) : base(value)
    {
    }

    public static readonly XAmzTarget49 OvertureServiceDescribeCustomerMetadata = new(
        "OvertureService.DescribeCustomerMetadata");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeCustomerMetadata,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDescribeCustomerMetadata => onOvertureServiceDescribeCustomerMetadata(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeCustomerMetadata, Action<string> otherwise)
    {
        if (this == OvertureServiceDescribeCustomerMetadata) onOvertureServiceDescribeCustomerMetadata();
        else otherwise(Value);
    }
}
