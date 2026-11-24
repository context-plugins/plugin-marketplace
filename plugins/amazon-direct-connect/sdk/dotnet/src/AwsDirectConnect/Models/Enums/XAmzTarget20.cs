using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget20>))]
public sealed record XAmzTarget20 : OpenStringEnum<XAmzTarget20>
{
    private XAmzTarget20(string value) : base(value)
    {
    }

    public static readonly XAmzTarget20 OvertureServiceUpdateConnection = new("OvertureService.UpdateConnection");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceUpdateConnection, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceUpdateConnection => onOvertureServiceUpdateConnection(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceUpdateConnection, Action<string> otherwise)
    {
        if (this == OvertureServiceUpdateConnection) onOvertureServiceUpdateConnection();
        else otherwise(Value);
    }
}
