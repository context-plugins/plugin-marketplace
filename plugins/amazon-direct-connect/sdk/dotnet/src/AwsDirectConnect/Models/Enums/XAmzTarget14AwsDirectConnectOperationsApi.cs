using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget14AwsDirectConnectOperationsApi>))]
public sealed record XAmzTarget14AwsDirectConnectOperationsApi : OpenStringEnum<XAmzTarget14AwsDirectConnectOperationsApi>
{
    private XAmzTarget14AwsDirectConnectOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget14AwsDirectConnectOperationsApi OvertureServiceUpdateConnectionsBillingMode = new(
        "OvertureService.UpdateConnectionsBillingMode");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceUpdateConnectionsBillingMode,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceUpdateConnectionsBillingMode => onOvertureServiceUpdateConnectionsBillingMode(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceUpdateConnectionsBillingMode, Action<string> otherwise)
    {
        if (this == OvertureServiceUpdateConnectionsBillingMode) onOvertureServiceUpdateConnectionsBillingMode();
        else otherwise(Value);
    }
}
