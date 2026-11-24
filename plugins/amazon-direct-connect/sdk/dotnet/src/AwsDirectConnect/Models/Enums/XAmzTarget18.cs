using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget18>))]
public sealed record XAmzTarget18 : OpenStringEnum<XAmzTarget18>
{
    private XAmzTarget18(string value) : base(value)
    {
    }

    public static readonly XAmzTarget18 OvertureServiceDescribeConnectionsOnInterconnect = new(
        "OvertureService.DescribeConnectionsOnInterconnect");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeConnectionsOnInterconnect,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceDescribeConnectionsOnInterconnect => onOvertureServiceDescribeConnectionsOnInterconnect(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeConnectionsOnInterconnect, Action<string> otherwise)
    {
        if (this ==
            OvertureServiceDescribeConnectionsOnInterconnect) onOvertureServiceDescribeConnectionsOnInterconnect();
        else otherwise(Value);
    }
}
