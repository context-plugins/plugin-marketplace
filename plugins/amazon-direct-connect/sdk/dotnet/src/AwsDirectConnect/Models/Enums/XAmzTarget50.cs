using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget50>))]
public sealed record XAmzTarget50 : OpenStringEnum<XAmzTarget50>
{
    private XAmzTarget50(string value) : base(value)
    {
    }

    public static readonly XAmzTarget50 OvertureServiceDescribeDirectConnectGatewayAttachments = new(
        "OvertureService.DescribeDirectConnectGatewayAttachments");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeDirectConnectGatewayAttachments,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceDescribeDirectConnectGatewayAttachments => onOvertureServiceDescribeDirectConnectGatewayAttachments(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeDirectConnectGatewayAttachments, Action<string> otherwise)
    {
        if (this ==
            OvertureServiceDescribeDirectConnectGatewayAttachments) onOvertureServiceDescribeDirectConnectGatewayAttachments();
        else otherwise(Value);
    }
}
