using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget>))]
public sealed record XAmzTarget : OpenStringEnum<XAmzTarget>
{
    private XAmzTarget(string value) : base(value)
    {
    }

    public static readonly XAmzTarget OvertureServiceAcceptDirectConnectGatewayAssociationProposal = new(
        "OvertureService.AcceptDirectConnectGatewayAssociationProposal");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceAcceptDirectConnectGatewayAssociationProposal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceAcceptDirectConnectGatewayAssociationProposal => onOvertureServiceAcceptDirectConnectGatewayAssociationProposal(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceAcceptDirectConnectGatewayAssociationProposal, Action<string> otherwise)
    {
        if (this ==
            OvertureServiceAcceptDirectConnectGatewayAssociationProposal) onOvertureServiceAcceptDirectConnectGatewayAssociationProposal();
        else otherwise(Value);
    }
}
