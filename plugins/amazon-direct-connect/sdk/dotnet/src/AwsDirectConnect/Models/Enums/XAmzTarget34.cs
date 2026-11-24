using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget34>))]
public sealed record XAmzTarget34 : OpenStringEnum<XAmzTarget34>
{
    private XAmzTarget34(string value) : base(value)
    {
    }

    public static readonly XAmzTarget34 OvertureServiceCreateDirectConnectGatewayAssociation = new(
        "OvertureService.CreateDirectConnectGatewayAssociation");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceCreateDirectConnectGatewayAssociation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceCreateDirectConnectGatewayAssociation => onOvertureServiceCreateDirectConnectGatewayAssociation(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceCreateDirectConnectGatewayAssociation, Action<string> otherwise)
    {
        if (this ==
            OvertureServiceCreateDirectConnectGatewayAssociation) onOvertureServiceCreateDirectConnectGatewayAssociation();
        else otherwise(Value);
    }
}
