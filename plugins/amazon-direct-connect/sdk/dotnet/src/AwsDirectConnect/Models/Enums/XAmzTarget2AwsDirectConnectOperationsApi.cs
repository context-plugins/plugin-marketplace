using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsDirectConnectOperationsApi>))]
public sealed record XAmzTarget2AwsDirectConnectOperationsApi : OpenStringEnum<XAmzTarget2AwsDirectConnectOperationsApi>
{
    private XAmzTarget2AwsDirectConnectOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsDirectConnectOperationsApi OvertureServiceAllocatePrivateVirtualInterface = new(
        "OvertureService.AllocatePrivateVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceAllocatePrivateVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceAllocatePrivateVirtualInterface => onOvertureServiceAllocatePrivateVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceAllocatePrivateVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceAllocatePrivateVirtualInterface) onOvertureServiceAllocatePrivateVirtualInterface();
        else otherwise(Value);
    }
}
