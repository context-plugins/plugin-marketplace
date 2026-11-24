using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget22>))]
public sealed record XAmzTarget22 : OpenStringEnum<XAmzTarget22>
{
    private XAmzTarget22(string value) : base(value)
    {
    }

    public static readonly XAmzTarget22 OvertureServiceDescribeHostedConnections = new(
        "OvertureService.DescribeHostedConnections");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeHostedConnections,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDescribeHostedConnections => onOvertureServiceDescribeHostedConnections(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeHostedConnections, Action<string> otherwise)
    {
        if (this == OvertureServiceDescribeHostedConnections) onOvertureServiceDescribeHostedConnections();
        else otherwise(Value);
    }
}
