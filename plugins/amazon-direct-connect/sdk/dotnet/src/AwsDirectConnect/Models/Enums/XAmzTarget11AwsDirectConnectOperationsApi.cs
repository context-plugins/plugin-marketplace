using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget11AwsDirectConnectOperationsApi>))]
public sealed record XAmzTarget11AwsDirectConnectOperationsApi : OpenStringEnum<XAmzTarget11AwsDirectConnectOperationsApi>
{
    private XAmzTarget11AwsDirectConnectOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget11AwsDirectConnectOperationsApi OvertureServiceDisassociateConnectionsFromResiliencyGroup = new(
        "OvertureService.DisassociateConnectionsFromResiliencyGroup");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDisassociateConnectionsFromResiliencyGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceDisassociateConnectionsFromResiliencyGroup => onOvertureServiceDisassociateConnectionsFromResiliencyGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDisassociateConnectionsFromResiliencyGroup, Action<string> otherwise)
    {
        if (this ==
            OvertureServiceDisassociateConnectionsFromResiliencyGroup) onOvertureServiceDisassociateConnectionsFromResiliencyGroup();
        else otherwise(Value);
    }
}
