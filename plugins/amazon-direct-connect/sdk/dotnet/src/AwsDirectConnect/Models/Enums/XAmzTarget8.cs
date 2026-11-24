using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget8>))]
public sealed record XAmzTarget8 : OpenStringEnum<XAmzTarget8>
{
    private XAmzTarget8(string value) : base(value)
    {
    }

    public static readonly XAmzTarget8 OvertureServiceAllocateTransitVirtualInterface = new(
        "OvertureService.AllocateTransitVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceAllocateTransitVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceAllocateTransitVirtualInterface => onOvertureServiceAllocateTransitVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceAllocateTransitVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceAllocateTransitVirtualInterface) onOvertureServiceAllocateTransitVirtualInterface();
        else otherwise(Value);
    }
}
