using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget55>))]
public sealed record XAmzTarget55 : OpenStringEnum<XAmzTarget55>
{
    private XAmzTarget55(string value) : base(value)
    {
    }

    public static readonly XAmzTarget55 OvertureServiceDescribeTags = new("OvertureService.DescribeTags");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeTags, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDescribeTags => onOvertureServiceDescribeTags(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeTags, Action<string> otherwise)
    {
        if (this == OvertureServiceDescribeTags) onOvertureServiceDescribeTags();
        else otherwise(Value);
    }
}
