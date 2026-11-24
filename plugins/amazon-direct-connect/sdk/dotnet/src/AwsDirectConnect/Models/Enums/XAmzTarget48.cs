using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget48>))]
public sealed record XAmzTarget48 : OpenStringEnum<XAmzTarget48>
{
    private XAmzTarget48(string value) : base(value)
    {
    }

    public static readonly XAmzTarget48 OvertureServiceDescribeConnectionLoa = new(
        "OvertureService.DescribeConnectionLoa");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeConnectionLoa,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDescribeConnectionLoa => onOvertureServiceDescribeConnectionLoa(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeConnectionLoa, Action<string> otherwise)
    {
        if (this == OvertureServiceDescribeConnectionLoa) onOvertureServiceDescribeConnectionLoa();
        else otherwise(Value);
    }
}
