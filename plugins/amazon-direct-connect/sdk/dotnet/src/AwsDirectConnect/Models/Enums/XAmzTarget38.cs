using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget38>))]
public sealed record XAmzTarget38 : OpenStringEnum<XAmzTarget38>
{
    private XAmzTarget38(string value) : base(value)
    {
    }

    public static readonly XAmzTarget38 OvertureServiceCreateInterconnect = new("OvertureService.CreateInterconnect");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceCreateInterconnect, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceCreateInterconnect => onOvertureServiceCreateInterconnect(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceCreateInterconnect, Action<string> otherwise)
    {
        if (this == OvertureServiceCreateInterconnect) onOvertureServiceCreateInterconnect();
        else otherwise(Value);
    }
}
