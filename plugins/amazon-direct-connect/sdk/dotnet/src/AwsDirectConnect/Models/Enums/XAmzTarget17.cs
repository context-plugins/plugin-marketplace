using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget17>))]
public sealed record XAmzTarget17 : OpenStringEnum<XAmzTarget17>
{
    private XAmzTarget17(string value) : base(value)
    {
    }

    public static readonly XAmzTarget17 OvertureServiceDescribeConnections = new("OvertureService.DescribeConnections");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeConnections,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDescribeConnections => onOvertureServiceDescribeConnections(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeConnections, Action<string> otherwise)
    {
        if (this == OvertureServiceDescribeConnections) onOvertureServiceDescribeConnections();
        else otherwise(Value);
    }
}
