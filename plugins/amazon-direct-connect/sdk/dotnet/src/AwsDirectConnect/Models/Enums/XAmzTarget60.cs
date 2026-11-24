using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget60>))]
public sealed record XAmzTarget60 : OpenStringEnum<XAmzTarget60>
{
    private XAmzTarget60(string value) : base(value)
    {
    }

    public static readonly XAmzTarget60 OvertureServiceTagResource = new("OvertureService.TagResource");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceTagResource, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceTagResource => onOvertureServiceTagResource(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceTagResource, Action<string> otherwise)
    {
        if (this == OvertureServiceTagResource) onOvertureServiceTagResource();
        else otherwise(Value);
    }
}
