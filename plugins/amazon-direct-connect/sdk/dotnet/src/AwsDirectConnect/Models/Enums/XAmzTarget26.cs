using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget26>))]
public sealed record XAmzTarget26 : OpenStringEnum<XAmzTarget26>
{
    private XAmzTarget26(string value) : base(value)
    {
    }

    public static readonly XAmzTarget26 OvertureServiceDeleteVirtualInterface = new(
        "OvertureService.DeleteVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDeleteVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDeleteVirtualInterface => onOvertureServiceDeleteVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDeleteVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceDeleteVirtualInterface) onOvertureServiceDeleteVirtualInterface();
        else otherwise(Value);
    }
}
