using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget14>))]
public sealed record XAmzTarget14 : OpenStringEnum<XAmzTarget14>
{
    private XAmzTarget14(string value) : base(value)
    {
    }

    public static readonly XAmzTarget14 OvertureServiceAssociateConnectionWithLag = new(
        "OvertureService.AssociateConnectionWithLag");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceAssociateConnectionWithLag,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceAssociateConnectionWithLag => onOvertureServiceAssociateConnectionWithLag(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceAssociateConnectionWithLag, Action<string> otherwise)
    {
        if (this == OvertureServiceAssociateConnectionWithLag) onOvertureServiceAssociateConnectionWithLag();
        else otherwise(Value);
    }
}
