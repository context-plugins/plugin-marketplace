using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget32>))]
public sealed record XAmzTarget32 : OpenStringEnum<XAmzTarget32>
{
    private XAmzTarget32(string value) : base(value)
    {
    }

    public static readonly XAmzTarget32 OvertureServiceDescribeDirectConnectGateways = new(
        "OvertureService.DescribeDirectConnectGateways");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeDirectConnectGateways,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceDescribeDirectConnectGateways => onOvertureServiceDescribeDirectConnectGateways(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeDirectConnectGateways, Action<string> otherwise)
    {
        if (this == OvertureServiceDescribeDirectConnectGateways) onOvertureServiceDescribeDirectConnectGateways();
        else otherwise(Value);
    }
}
