using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AwsDirectConnectOperationsApi>))]
public sealed record XAmzTarget3AwsDirectConnectOperationsApi : OpenStringEnum<XAmzTarget3AwsDirectConnectOperationsApi>
{
    private XAmzTarget3AwsDirectConnectOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AwsDirectConnectOperationsApi OvertureServiceAllocatePublicVirtualInterface = new(
        "OvertureService.AllocatePublicVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceAllocatePublicVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceAllocatePublicVirtualInterface => onOvertureServiceAllocatePublicVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceAllocatePublicVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceAllocatePublicVirtualInterface) onOvertureServiceAllocatePublicVirtualInterface();
        else otherwise(Value);
    }
}
