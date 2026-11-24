using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget7AwsDirectConnectOperationsApi>))]
public sealed record XAmzTarget7AwsDirectConnectOperationsApi : OpenStringEnum<XAmzTarget7AwsDirectConnectOperationsApi>
{
    private XAmzTarget7AwsDirectConnectOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget7AwsDirectConnectOperationsApi OvertureServiceConfirmPrivateVirtualInterface = new(
        "OvertureService.ConfirmPrivateVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceConfirmPrivateVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceConfirmPrivateVirtualInterface => onOvertureServiceConfirmPrivateVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceConfirmPrivateVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceConfirmPrivateVirtualInterface) onOvertureServiceConfirmPrivateVirtualInterface();
        else otherwise(Value);
    }
}
