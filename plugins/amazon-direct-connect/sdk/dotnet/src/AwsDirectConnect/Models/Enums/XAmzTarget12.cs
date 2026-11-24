using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget12>))]
public sealed record XAmzTarget12 : OpenStringEnum<XAmzTarget12>
{
    private XAmzTarget12(string value) : base(value)
    {
    }

    public static readonly XAmzTarget12 OvertureServiceConfirmPublicVirtualInterface = new(
        "OvertureService.ConfirmPublicVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceConfirmPublicVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceConfirmPublicVirtualInterface => onOvertureServiceConfirmPublicVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceConfirmPublicVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceConfirmPublicVirtualInterface) onOvertureServiceConfirmPublicVirtualInterface();
        else otherwise(Value);
    }
}
