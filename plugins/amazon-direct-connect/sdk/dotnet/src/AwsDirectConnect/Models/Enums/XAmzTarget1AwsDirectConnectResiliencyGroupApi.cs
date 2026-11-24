using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AwsDirectConnectResiliencyGroupApi>))]
public sealed record XAmzTarget1AwsDirectConnectResiliencyGroupApi : OpenStringEnum<XAmzTarget1AwsDirectConnectResiliencyGroupApi>
{
    private XAmzTarget1AwsDirectConnectResiliencyGroupApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AwsDirectConnectResiliencyGroupApi OvertureServiceDeleteResiliencyGroup = new(
        "OvertureService.DeleteResiliencyGroup");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceDeleteResiliencyGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceDeleteResiliencyGroup => onOvertureServiceDeleteResiliencyGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceDeleteResiliencyGroup, Action<string> otherwise)
    {
        if (this == OvertureServiceDeleteResiliencyGroup) onOvertureServiceDeleteResiliencyGroup();
        else otherwise(Value);
    }
}
