using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget13>))]
public sealed record XAmzTarget13 : OpenStringEnum<XAmzTarget13>
{
    private XAmzTarget13(string value) : base(value)
    {
    }

    public static readonly XAmzTarget13 OvertureServiceConfirmTransitVirtualInterface = new(
        "OvertureService.ConfirmTransitVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceConfirmTransitVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceConfirmTransitVirtualInterface => onOvertureServiceConfirmTransitVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceConfirmTransitVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceConfirmTransitVirtualInterface) onOvertureServiceConfirmTransitVirtualInterface();
        else otherwise(Value);
    }
}
