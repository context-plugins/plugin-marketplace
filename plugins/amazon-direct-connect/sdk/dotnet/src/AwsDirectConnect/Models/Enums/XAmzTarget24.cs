using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget24>))]
public sealed record XAmzTarget24 : OpenStringEnum<XAmzTarget24>
{
    private XAmzTarget24(string value) : base(value)
    {
    }

    public static readonly XAmzTarget24 OvertureServiceDisassociateMacSecKey = new(
        "OvertureService.DisassociateMacSecKey");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDisassociateMacSecKey,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDisassociateMacSecKey => onOvertureServiceDisassociateMacSecKey(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDisassociateMacSecKey, Action<string> otherwise)
    {
        if (this == OvertureServiceDisassociateMacSecKey) onOvertureServiceDisassociateMacSecKey();
        else otherwise(Value);
    }
}
