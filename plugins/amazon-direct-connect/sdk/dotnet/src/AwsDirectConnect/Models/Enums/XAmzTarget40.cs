using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget40>))]
public sealed record XAmzTarget40 : OpenStringEnum<XAmzTarget40>
{
    private XAmzTarget40(string value) : base(value)
    {
    }

    public static readonly XAmzTarget40 OvertureServiceDescribeInterconnects = new(
        "OvertureService.DescribeInterconnects");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeInterconnects,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDescribeInterconnects => onOvertureServiceDescribeInterconnects(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeInterconnects, Action<string> otherwise)
    {
        if (this == OvertureServiceDescribeInterconnects) onOvertureServiceDescribeInterconnects();
        else otherwise(Value);
    }
}
