using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget54>))]
public sealed record XAmzTarget54 : OpenStringEnum<XAmzTarget54>
{
    private XAmzTarget54(string value) : base(value)
    {
    }

    public static readonly XAmzTarget54 OvertureServiceDescribeRouterConfiguration = new(
        "OvertureService.DescribeRouterConfiguration");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeRouterConfiguration,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDescribeRouterConfiguration => onOvertureServiceDescribeRouterConfiguration(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeRouterConfiguration, Action<string> otherwise)
    {
        if (this == OvertureServiceDescribeRouterConfiguration) onOvertureServiceDescribeRouterConfiguration();
        else otherwise(Value);
    }
}
