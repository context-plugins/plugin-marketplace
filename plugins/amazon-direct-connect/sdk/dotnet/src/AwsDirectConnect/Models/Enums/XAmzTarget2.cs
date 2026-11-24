using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2>))]
public sealed record XAmzTarget2 : OpenStringEnum<XAmzTarget2>
{
    private XAmzTarget2(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2 OvertureServiceDeleteDirectConnectGatewayAssociationProposal = new(
        "OvertureService.DeleteDirectConnectGatewayAssociationProposal");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDeleteDirectConnectGatewayAssociationProposal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceDeleteDirectConnectGatewayAssociationProposal => onOvertureServiceDeleteDirectConnectGatewayAssociationProposal(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDeleteDirectConnectGatewayAssociationProposal, Action<string> otherwise)
    {
        if (this ==
            OvertureServiceDeleteDirectConnectGatewayAssociationProposal) onOvertureServiceDeleteDirectConnectGatewayAssociationProposal();
        else otherwise(Value);
    }
}
