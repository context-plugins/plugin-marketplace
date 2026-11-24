using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5>))]
public sealed record XAmzTarget5 : OpenStringEnum<XAmzTarget5>
{
    private XAmzTarget5(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5 OvertureServiceAllocateHostedConnection = new(
        "OvertureService.AllocateHostedConnection");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceAllocateHostedConnection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceAllocateHostedConnection => onOvertureServiceAllocateHostedConnection(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceAllocateHostedConnection, Action<string> otherwise)
    {
        if (this == OvertureServiceAllocateHostedConnection) onOvertureServiceAllocateHostedConnection();
        else otherwise(Value);
    }
}
