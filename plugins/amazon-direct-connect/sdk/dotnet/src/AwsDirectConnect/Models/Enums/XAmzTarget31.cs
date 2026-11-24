using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget31>))]
public sealed record XAmzTarget31 : OpenStringEnum<XAmzTarget31>
{
    private XAmzTarget31(string value) : base(value)
    {
    }

    public static readonly XAmzTarget31 OvertureServiceDeleteDirectConnectGateway = new(
        "OvertureService.DeleteDirectConnectGateway");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDeleteDirectConnectGateway,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDeleteDirectConnectGateway => onOvertureServiceDeleteDirectConnectGateway(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDeleteDirectConnectGateway, Action<string> otherwise)
    {
        if (this == OvertureServiceDeleteDirectConnectGateway) onOvertureServiceDeleteDirectConnectGateway();
        else otherwise(Value);
    }
}
