using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4>))]
public sealed record XAmzTarget4 : OpenStringEnum<XAmzTarget4>
{
    private XAmzTarget4(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4 OvertureServiceAllocateConnectionOnInterconnect = new(
        "OvertureService.AllocateConnectionOnInterconnect");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceAllocateConnectionOnInterconnect,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceAllocateConnectionOnInterconnect => onOvertureServiceAllocateConnectionOnInterconnect(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceAllocateConnectionOnInterconnect, Action<string> otherwise)
    {
        if (this ==
            OvertureServiceAllocateConnectionOnInterconnect) onOvertureServiceAllocateConnectionOnInterconnect();
        else otherwise(Value);
    }
}
