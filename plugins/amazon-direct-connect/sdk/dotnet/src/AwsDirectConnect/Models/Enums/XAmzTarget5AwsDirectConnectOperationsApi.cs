using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5AwsDirectConnectOperationsApi>))]
public sealed record XAmzTarget5AwsDirectConnectOperationsApi : OpenStringEnum<XAmzTarget5AwsDirectConnectOperationsApi>
{
    private XAmzTarget5AwsDirectConnectOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5AwsDirectConnectOperationsApi OvertureServiceConfirmConnection = new(
        "OvertureService.ConfirmConnection");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceConfirmConnection, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceConfirmConnection => onOvertureServiceConfirmConnection(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceConfirmConnection, Action<string> otherwise)
    {
        if (this == OvertureServiceConfirmConnection) onOvertureServiceConfirmConnection();
        else otherwise(Value);
    }
}
