using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget47>))]
public sealed record XAmzTarget47 : OpenStringEnum<XAmzTarget47>
{
    private XAmzTarget47(string value) : base(value)
    {
    }

    public static readonly XAmzTarget47 OvertureServiceCreateTransitVirtualInterface = new(
        "OvertureService.CreateTransitVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceCreateTransitVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceCreateTransitVirtualInterface => onOvertureServiceCreateTransitVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceCreateTransitVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceCreateTransitVirtualInterface) onOvertureServiceCreateTransitVirtualInterface();
        else otherwise(Value);
    }
}
