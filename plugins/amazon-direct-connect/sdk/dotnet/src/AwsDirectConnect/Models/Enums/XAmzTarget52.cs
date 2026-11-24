using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget52>))]
public sealed record XAmzTarget52 : OpenStringEnum<XAmzTarget52>
{
    private XAmzTarget52(string value) : base(value)
    {
    }

    public static readonly XAmzTarget52 OvertureServiceDescribeLoa = new("OvertureService.DescribeLoa");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDescribeLoa, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDescribeLoa => onOvertureServiceDescribeLoa(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDescribeLoa, Action<string> otherwise)
    {
        if (this == OvertureServiceDescribeLoa) onOvertureServiceDescribeLoa();
        else otherwise(Value);
    }
}
