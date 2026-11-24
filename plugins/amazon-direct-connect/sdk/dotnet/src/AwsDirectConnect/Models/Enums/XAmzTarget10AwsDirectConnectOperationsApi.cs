using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget10AwsDirectConnectOperationsApi>))]
public sealed record XAmzTarget10AwsDirectConnectOperationsApi : OpenStringEnum<XAmzTarget10AwsDirectConnectOperationsApi>
{
    private XAmzTarget10AwsDirectConnectOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget10AwsDirectConnectOperationsApi OvertureServiceAssociateConnectionsToResiliencyGroup = new(
        "OvertureService.AssociateConnectionsToResiliencyGroup");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceAssociateConnectionsToResiliencyGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceAssociateConnectionsToResiliencyGroup => onOvertureServiceAssociateConnectionsToResiliencyGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceAssociateConnectionsToResiliencyGroup, Action<string> otherwise)
    {
        if (this ==
            OvertureServiceAssociateConnectionsToResiliencyGroup) onOvertureServiceAssociateConnectionsToResiliencyGroup();
        else otherwise(Value);
    }
}
