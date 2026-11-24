using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget33>))]
public sealed record XAmzTarget33 : OpenStringEnum<XAmzTarget33>
{
    private XAmzTarget33(string value) : base(value)
    {
    }

    public static readonly XAmzTarget33 OvertureServiceUpdateDirectConnectGateway = new(
        "OvertureService.UpdateDirectConnectGateway");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceUpdateDirectConnectGateway,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceUpdateDirectConnectGateway => onOvertureServiceUpdateDirectConnectGateway(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceUpdateDirectConnectGateway, Action<string> otherwise)
    {
        if (this == OvertureServiceUpdateDirectConnectGateway) onOvertureServiceUpdateDirectConnectGateway();
        else otherwise(Value);
    }
}
