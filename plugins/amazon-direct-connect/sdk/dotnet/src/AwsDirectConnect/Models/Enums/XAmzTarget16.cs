using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget16>))]
public sealed record XAmzTarget16 : OpenStringEnum<XAmzTarget16>
{
    private XAmzTarget16(string value) : base(value)
    {
    }

    public static readonly XAmzTarget16 OvertureServiceDeleteConnection = new("OvertureService.DeleteConnection");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDeleteConnection, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDeleteConnection => onOvertureServiceDeleteConnection(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDeleteConnection, Action<string> otherwise)
    {
        if (this == OvertureServiceDeleteConnection) onOvertureServiceDeleteConnection();
        else otherwise(Value);
    }
}
