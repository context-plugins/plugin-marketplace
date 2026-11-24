using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1>))]
public sealed record XAmzTarget1 : OpenStringEnum<XAmzTarget1>
{
    private XAmzTarget1(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1 OvertureServiceCreateDirectConnectGatewayAssociationProposal = new(
        "OvertureService.CreateDirectConnectGatewayAssociationProposal");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceCreateDirectConnectGatewayAssociationProposal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceCreateDirectConnectGatewayAssociationProposal => onOvertureServiceCreateDirectConnectGatewayAssociationProposal(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceCreateDirectConnectGatewayAssociationProposal, Action<string> otherwise)
    {
        if (this ==
            OvertureServiceCreateDirectConnectGatewayAssociationProposal) onOvertureServiceCreateDirectConnectGatewayAssociationProposal();
        else otherwise(Value);
    }
}
