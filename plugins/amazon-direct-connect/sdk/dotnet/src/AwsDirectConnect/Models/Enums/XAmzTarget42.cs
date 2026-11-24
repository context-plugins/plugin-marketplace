using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget42>))]
public sealed record XAmzTarget42 : OpenStringEnum<XAmzTarget42>
{
    private XAmzTarget42(string value) : base(value)
    {
    }

    public static readonly XAmzTarget42 OvertureServiceDeleteLag = new("OvertureService.DeleteLag");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDeleteLag, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDeleteLag => onOvertureServiceDeleteLag(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDeleteLag, Action<string> otherwise)
    {
        if (this == OvertureServiceDeleteLag) onOvertureServiceDeleteLag();
        else otherwise(Value);
    }
}
