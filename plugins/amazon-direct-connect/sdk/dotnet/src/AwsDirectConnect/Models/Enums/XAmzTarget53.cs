using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget53>))]
public sealed record XAmzTarget53 : OpenStringEnum<XAmzTarget53>
{
    private XAmzTarget53(string value) : base(value)
    {
    }

    public static readonly XAmzTarget53 OvertureServiceDescribeLocations = new("OvertureService.DescribeLocations");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeLocations, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDescribeLocations => onOvertureServiceDescribeLocations(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeLocations, Action<string> otherwise)
    {
        if (this == OvertureServiceDescribeLocations) onOvertureServiceDescribeLocations();
        else otherwise(Value);
    }
}
