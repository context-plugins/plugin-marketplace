using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsDirectConnectOperationsApi>))]
public sealed record XAmzTarget1AwsDirectConnectOperationsApi : OpenStringEnum<XAmzTarget1AwsDirectConnectOperationsApi>
{
    private XAmzTarget1AwsDirectConnectOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsDirectConnectOperationsApi OvertureServiceAllocateHostedConnection = new(
        "OvertureService.AllocateHostedConnection");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceAllocateHostedConnection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceAllocateHostedConnection => onOvertureServiceAllocateHostedConnection(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceAllocateHostedConnection, Action<string> otherwise)
    {
        if (this == OvertureServiceAllocateHostedConnection) onOvertureServiceAllocateHostedConnection();
        else otherwise(Value);
    }
}
