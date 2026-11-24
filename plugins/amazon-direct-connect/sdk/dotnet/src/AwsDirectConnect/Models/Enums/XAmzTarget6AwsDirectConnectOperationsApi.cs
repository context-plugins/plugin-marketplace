using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget6AwsDirectConnectOperationsApi>))]
public sealed record XAmzTarget6AwsDirectConnectOperationsApi : OpenStringEnum<XAmzTarget6AwsDirectConnectOperationsApi>
{
    private XAmzTarget6AwsDirectConnectOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget6AwsDirectConnectOperationsApi OvertureServiceConfirmCustomerAgreement = new(
        "OvertureService.ConfirmCustomerAgreement");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceConfirmCustomerAgreement,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceConfirmCustomerAgreement => onOvertureServiceConfirmCustomerAgreement(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceConfirmCustomerAgreement, Action<string> otherwise)
    {
        if (this == OvertureServiceConfirmCustomerAgreement) onOvertureServiceConfirmCustomerAgreement();
        else otherwise(Value);
    }
}
