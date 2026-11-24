using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget9AwsDirectConnectOperationsApi>))]
public sealed record XAmzTarget9AwsDirectConnectOperationsApi : OpenStringEnum<XAmzTarget9AwsDirectConnectOperationsApi>
{
    private XAmzTarget9AwsDirectConnectOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget9AwsDirectConnectOperationsApi OvertureServiceConfirmTransitVirtualInterface = new(
        "OvertureService.ConfirmTransitVirtualInterface");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceConfirmTransitVirtualInterface,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceConfirmTransitVirtualInterface => onOvertureServiceConfirmTransitVirtualInterface(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceConfirmTransitVirtualInterface, Action<string> otherwise)
    {
        if (this == OvertureServiceConfirmTransitVirtualInterface) onOvertureServiceConfirmTransitVirtualInterface();
        else otherwise(Value);
    }
}
