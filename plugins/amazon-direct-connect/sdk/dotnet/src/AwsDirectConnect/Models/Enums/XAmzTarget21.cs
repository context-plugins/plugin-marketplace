using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget21>))]
public sealed record XAmzTarget21 : OpenStringEnum<XAmzTarget21>
{
    private XAmzTarget21(string value) : base(value)
    {
    }

    public static readonly XAmzTarget21 OvertureServiceAssociateHostedConnection = new(
        "OvertureService.AssociateHostedConnection");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceAssociateHostedConnection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceAssociateHostedConnection => onOvertureServiceAssociateHostedConnection(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceAssociateHostedConnection, Action<string> otherwise)
    {
        if (this == OvertureServiceAssociateHostedConnection) onOvertureServiceAssociateHostedConnection();
        else otherwise(Value);
    }
}
