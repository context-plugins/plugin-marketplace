using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget25>))]
public sealed record XAmzTarget25 : OpenStringEnum<XAmzTarget25>
{
    private XAmzTarget25(string value) : base(value)
    {
    }

    public static readonly XAmzTarget25 OvertureServiceAssociateVirtualInterface = new(
        "OvertureService.AssociateVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceAssociateVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceAssociateVirtualInterface => onOvertureServiceAssociateVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceAssociateVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceAssociateVirtualInterface) onOvertureServiceAssociateVirtualInterface();
        else otherwise(Value);
    }
}
