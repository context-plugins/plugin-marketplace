using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget36>))]
public sealed record XAmzTarget36 : OpenStringEnum<XAmzTarget36>
{
    private XAmzTarget36(string value) : base(value)
    {
    }

    public static readonly XAmzTarget36 OvertureServiceDescribeDirectConnectGatewayAssociations = new(
        "OvertureService.DescribeDirectConnectGatewayAssociations");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeDirectConnectGatewayAssociations,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceDescribeDirectConnectGatewayAssociations => onOvertureServiceDescribeDirectConnectGatewayAssociations(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeDirectConnectGatewayAssociations, Action<string> otherwise)
    {
        if (this ==
            OvertureServiceDescribeDirectConnectGatewayAssociations) onOvertureServiceDescribeDirectConnectGatewayAssociations();
        else otherwise(Value);
    }
}
