using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget45>))]
public sealed record XAmzTarget45 : OpenStringEnum<XAmzTarget45>
{
    private XAmzTarget45(string value) : base(value)
    {
    }

    public static readonly XAmzTarget45 OvertureServiceCreatePrivateVirtualInterface = new(
        "OvertureService.CreatePrivateVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceCreatePrivateVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceCreatePrivateVirtualInterface => onOvertureServiceCreatePrivateVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceCreatePrivateVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceCreatePrivateVirtualInterface) onOvertureServiceCreatePrivateVirtualInterface();
        else otherwise(Value);
    }
}
