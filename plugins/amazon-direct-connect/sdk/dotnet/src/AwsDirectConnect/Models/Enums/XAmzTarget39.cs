using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget39>))]
public sealed record XAmzTarget39 : OpenStringEnum<XAmzTarget39>
{
    private XAmzTarget39(string value) : base(value)
    {
    }

    public static readonly XAmzTarget39 OvertureServiceDeleteInterconnect = new("OvertureService.DeleteInterconnect");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDeleteInterconnect, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDeleteInterconnect => onOvertureServiceDeleteInterconnect(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDeleteInterconnect, Action<string> otherwise)
    {
        if (this == OvertureServiceDeleteInterconnect) onOvertureServiceDeleteInterconnect();
        else otherwise(Value);
    }
}
