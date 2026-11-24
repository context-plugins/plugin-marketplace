using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget51>))]
public sealed record XAmzTarget51 : OpenStringEnum<XAmzTarget51>
{
    private XAmzTarget51(string value) : base(value)
    {
    }

    public static readonly XAmzTarget51 OvertureServiceDescribeInterconnectLoa = new(
        "OvertureService.DescribeInterconnectLoa");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeInterconnectLoa,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDescribeInterconnectLoa => onOvertureServiceDescribeInterconnectLoa(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeInterconnectLoa, Action<string> otherwise)
    {
        if (this == OvertureServiceDescribeInterconnectLoa) onOvertureServiceDescribeInterconnectLoa();
        else otherwise(Value);
    }
}
