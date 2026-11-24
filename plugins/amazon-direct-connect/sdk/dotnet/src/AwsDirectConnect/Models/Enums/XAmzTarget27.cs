using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget27>))]
public sealed record XAmzTarget27 : OpenStringEnum<XAmzTarget27>
{
    private XAmzTarget27(string value) : base(value)
    {
    }

    public static readonly XAmzTarget27 OvertureServiceDescribeVirtualInterfaces = new(
        "OvertureService.DescribeVirtualInterfaces");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeVirtualInterfaces,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDescribeVirtualInterfaces => onOvertureServiceDescribeVirtualInterfaces(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeVirtualInterfaces, Action<string> otherwise)
    {
        if (this == OvertureServiceDescribeVirtualInterfaces) onOvertureServiceDescribeVirtualInterfaces();
        else otherwise(Value);
    }
}
