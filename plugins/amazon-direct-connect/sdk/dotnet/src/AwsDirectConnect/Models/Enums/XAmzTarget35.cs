using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget35>))]
public sealed record XAmzTarget35 : OpenStringEnum<XAmzTarget35>
{
    private XAmzTarget35(string value) : base(value)
    {
    }

    public static readonly XAmzTarget35 OvertureServiceDeleteDirectConnectGatewayAssociation = new(
        "OvertureService.DeleteDirectConnectGatewayAssociation");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDeleteDirectConnectGatewayAssociation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceDeleteDirectConnectGatewayAssociation => onOvertureServiceDeleteDirectConnectGatewayAssociation(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDeleteDirectConnectGatewayAssociation, Action<string> otherwise)
    {
        if (this ==
            OvertureServiceDeleteDirectConnectGatewayAssociation) onOvertureServiceDeleteDirectConnectGatewayAssociation();
        else otherwise(Value);
    }
}
