using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget10>))]
public sealed record XAmzTarget10 : OpenStringEnum<XAmzTarget10>
{
    private XAmzTarget10(string value) : base(value)
    {
    }

    public static readonly XAmzTarget10 OvertureServiceConfirmCustomerAgreement = new(
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
