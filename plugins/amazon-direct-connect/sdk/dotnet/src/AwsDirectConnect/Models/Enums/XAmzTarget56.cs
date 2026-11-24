using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget56>))]
public sealed record XAmzTarget56 : OpenStringEnum<XAmzTarget56>
{
    private XAmzTarget56(string value) : base(value)
    {
    }

    public static readonly XAmzTarget56 OvertureServiceDescribeVirtualGateways = new(
        "OvertureService.DescribeVirtualGateways");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeVirtualGateways,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDescribeVirtualGateways => onOvertureServiceDescribeVirtualGateways(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeVirtualGateways, Action<string> otherwise)
    {
        if (this == OvertureServiceDescribeVirtualGateways) onOvertureServiceDescribeVirtualGateways();
        else otherwise(Value);
    }
}
