using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget15>))]
public sealed record XAmzTarget15 : OpenStringEnum<XAmzTarget15>
{
    private XAmzTarget15(string value) : base(value)
    {
    }

    public static readonly XAmzTarget15 OvertureServiceCreateConnection = new("OvertureService.CreateConnection");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceCreateConnection, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceCreateConnection => onOvertureServiceCreateConnection(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceCreateConnection, Action<string> otherwise)
    {
        if (this == OvertureServiceCreateConnection) onOvertureServiceCreateConnection();
        else otherwise(Value);
    }
}
