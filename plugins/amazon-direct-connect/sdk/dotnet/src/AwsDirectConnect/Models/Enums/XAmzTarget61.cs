using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget61>))]
public sealed record XAmzTarget61 : OpenStringEnum<XAmzTarget61>
{
    private XAmzTarget61(string value) : base(value)
    {
    }

    public static readonly XAmzTarget61 OvertureServiceUntagResource = new("OvertureService.UntagResource");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceUntagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceUntagResource => onOvertureServiceUntagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceUntagResource, Action<string> otherwise)
    {
        if (this == OvertureServiceUntagResource) onOvertureServiceUntagResource();
        else otherwise(Value);
    }
}
