using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget46>))]
public sealed record XAmzTarget46 : OpenStringEnum<XAmzTarget46>
{
    private XAmzTarget46(string value) : base(value)
    {
    }

    public static readonly XAmzTarget46 OvertureServiceCreatePublicVirtualInterface = new(
        "OvertureService.CreatePublicVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceCreatePublicVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceCreatePublicVirtualInterface => onOvertureServiceCreatePublicVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceCreatePublicVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceCreatePublicVirtualInterface) onOvertureServiceCreatePublicVirtualInterface();
        else otherwise(Value);
    }
}
