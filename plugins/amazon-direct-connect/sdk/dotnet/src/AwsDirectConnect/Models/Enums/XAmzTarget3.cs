using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3>))]
public sealed record XAmzTarget3 : OpenStringEnum<XAmzTarget3>
{
    private XAmzTarget3(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3 OvertureServiceDescribeDirectConnectGatewayAssociationProposals = new(
        "OvertureService.DescribeDirectConnectGatewayAssociationProposals");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeDirectConnectGatewayAssociationProposals,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceDescribeDirectConnectGatewayAssociationProposals => onOvertureServiceDescribeDirectConnectGatewayAssociationProposals(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeDirectConnectGatewayAssociationProposals,
        Action<string> otherwise)
    {
        if (this ==
            OvertureServiceDescribeDirectConnectGatewayAssociationProposals) onOvertureServiceDescribeDirectConnectGatewayAssociationProposals();
        else otherwise(Value);
    }
}
