using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget9>))]
public sealed record XAmzTarget9 : OpenStringEnum<XAmzTarget9>
{
    private XAmzTarget9(string value) : base(value)
    {
    }

    public static readonly XAmzTarget9 OvertureServiceConfirmConnection = new("OvertureService.ConfirmConnection");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceConfirmConnection, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceConfirmConnection => onOvertureServiceConfirmConnection(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceConfirmConnection, Action<string> otherwise)
    {
        if (this == OvertureServiceConfirmConnection) onOvertureServiceConfirmConnection();
        else otherwise(Value);
    }
}
