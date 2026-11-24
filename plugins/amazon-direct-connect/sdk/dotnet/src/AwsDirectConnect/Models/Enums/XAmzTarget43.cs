using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget43>))]
public sealed record XAmzTarget43 : OpenStringEnum<XAmzTarget43>
{
    private XAmzTarget43(string value) : base(value)
    {
    }

    public static readonly XAmzTarget43 OvertureServiceDescribeLags = new("OvertureService.DescribeLags");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeLags, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDescribeLags => onOvertureServiceDescribeLags(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeLags, Action<string> otherwise)
    {
        if (this == OvertureServiceDescribeLags) onOvertureServiceDescribeLags();
        else otherwise(Value);
    }
}
