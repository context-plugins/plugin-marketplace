using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget8AwsDirectConnectOperationsApi>))]
public sealed record XAmzTarget8AwsDirectConnectOperationsApi : OpenStringEnum<XAmzTarget8AwsDirectConnectOperationsApi>
{
    private XAmzTarget8AwsDirectConnectOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget8AwsDirectConnectOperationsApi OvertureServiceConfirmPublicVirtualInterface = new(
        "OvertureService.ConfirmPublicVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceConfirmPublicVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceConfirmPublicVirtualInterface => onOvertureServiceConfirmPublicVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceConfirmPublicVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceConfirmPublicVirtualInterface) onOvertureServiceConfirmPublicVirtualInterface();
        else otherwise(Value);
    }
}
