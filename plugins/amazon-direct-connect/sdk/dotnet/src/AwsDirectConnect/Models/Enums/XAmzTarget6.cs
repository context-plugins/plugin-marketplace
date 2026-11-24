using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget6>))]
public sealed record XAmzTarget6 : OpenStringEnum<XAmzTarget6>
{
    private XAmzTarget6(string value) : base(value)
    {
    }

    public static readonly XAmzTarget6 OvertureServiceAllocatePrivateVirtualInterface = new(
        "OvertureService.AllocatePrivateVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceAllocatePrivateVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceAllocatePrivateVirtualInterface => onOvertureServiceAllocatePrivateVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceAllocatePrivateVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceAllocatePrivateVirtualInterface) onOvertureServiceAllocatePrivateVirtualInterface();
        else otherwise(Value);
    }
}
