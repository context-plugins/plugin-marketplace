using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget44>))]
public sealed record XAmzTarget44 : OpenStringEnum<XAmzTarget44>
{
    private XAmzTarget44(string value) : base(value)
    {
    }

    public static readonly XAmzTarget44 OvertureServiceUpdateLag = new("OvertureService.UpdateLag");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceUpdateLag, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceUpdateLag => onOvertureServiceUpdateLag(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceUpdateLag, Action<string> otherwise)
    {
        if (this == OvertureServiceUpdateLag) onOvertureServiceUpdateLag();
        else otherwise(Value);
    }
}
