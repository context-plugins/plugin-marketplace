using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget23>))]
public sealed record XAmzTarget23 : OpenStringEnum<XAmzTarget23>
{
    private XAmzTarget23(string value) : base(value)
    {
    }

    public static readonly XAmzTarget23 OvertureServiceAssociateMacSecKey = new("OvertureService.AssociateMacSecKey");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceAssociateMacSecKey, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceAssociateMacSecKey => onOvertureServiceAssociateMacSecKey(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceAssociateMacSecKey, Action<string> otherwise)
    {
        if (this == OvertureServiceAssociateMacSecKey) onOvertureServiceAssociateMacSecKey();
        else otherwise(Value);
    }
}
