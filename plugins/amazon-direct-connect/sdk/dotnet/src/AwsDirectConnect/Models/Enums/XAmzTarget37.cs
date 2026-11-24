using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget37>))]
public sealed record XAmzTarget37 : OpenStringEnum<XAmzTarget37>
{
    private XAmzTarget37(string value) : base(value)
    {
    }

    public static readonly XAmzTarget37 OvertureServiceUpdateDirectConnectGatewayAssociation = new(
        "OvertureService.UpdateDirectConnectGatewayAssociation");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceUpdateDirectConnectGatewayAssociation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceUpdateDirectConnectGatewayAssociation => onOvertureServiceUpdateDirectConnectGatewayAssociation(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceUpdateDirectConnectGatewayAssociation, Action<string> otherwise)
    {
        if (this ==
            OvertureServiceUpdateDirectConnectGatewayAssociation) onOvertureServiceUpdateDirectConnectGatewayAssociation();
        else otherwise(Value);
    }
}
