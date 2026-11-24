using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget30>))]
public sealed record XAmzTarget30 : OpenStringEnum<XAmzTarget30>
{
    private XAmzTarget30(string value) : base(value)
    {
    }

    public static readonly XAmzTarget30 OvertureServiceCreateDirectConnectGateway = new(
        "OvertureService.CreateDirectConnectGateway");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceCreateDirectConnectGateway,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceCreateDirectConnectGateway => onOvertureServiceCreateDirectConnectGateway(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceCreateDirectConnectGateway, Action<string> otherwise)
    {
        if (this == OvertureServiceCreateDirectConnectGateway) onOvertureServiceCreateDirectConnectGateway();
        else otherwise(Value);
    }
}
