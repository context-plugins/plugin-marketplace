using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget11>))]
public sealed record XAmzTarget11 : OpenStringEnum<XAmzTarget11>
{
    private XAmzTarget11(string value) : base(value)
    {
    }

    public static readonly XAmzTarget11 OvertureServiceConfirmPrivateVirtualInterface = new(
        "OvertureService.ConfirmPrivateVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceConfirmPrivateVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceConfirmPrivateVirtualInterface => onOvertureServiceConfirmPrivateVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceConfirmPrivateVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceConfirmPrivateVirtualInterface) onOvertureServiceConfirmPrivateVirtualInterface();
        else otherwise(Value);
    }
}
