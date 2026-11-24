using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget7>))]
public sealed record XAmzTarget7 : OpenStringEnum<XAmzTarget7>
{
    private XAmzTarget7(string value) : base(value)
    {
    }

    public static readonly XAmzTarget7 OvertureServiceAllocatePublicVirtualInterface = new(
        "OvertureService.AllocatePublicVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceAllocatePublicVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceAllocatePublicVirtualInterface => onOvertureServiceAllocatePublicVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceAllocatePublicVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceAllocatePublicVirtualInterface) onOvertureServiceAllocatePublicVirtualInterface();
        else otherwise(Value);
    }
}
