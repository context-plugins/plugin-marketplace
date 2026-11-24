using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget41>))]
public sealed record XAmzTarget41 : OpenStringEnum<XAmzTarget41>
{
    private XAmzTarget41(string value) : base(value)
    {
    }

    public static readonly XAmzTarget41 OvertureServiceCreateLag = new("OvertureService.CreateLag");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceCreateLag, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceCreateLag => onOvertureServiceCreateLag(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceCreateLag, Action<string> otherwise)
    {
        if (this == OvertureServiceCreateLag) onOvertureServiceCreateLag();
        else otherwise(Value);
    }
}
