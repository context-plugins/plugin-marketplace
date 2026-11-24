using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AwsDirectConnectResiliencyGroupApi>))]
public sealed record XAmzTarget4AwsDirectConnectResiliencyGroupApi : OpenStringEnum<XAmzTarget4AwsDirectConnectResiliencyGroupApi>
{
    private XAmzTarget4AwsDirectConnectResiliencyGroupApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AwsDirectConnectResiliencyGroupApi OvertureServiceUpdateResiliencyGroup = new(
        "OvertureService.UpdateResiliencyGroup");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceUpdateResiliencyGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceUpdateResiliencyGroup => onOvertureServiceUpdateResiliencyGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceUpdateResiliencyGroup, Action<string> otherwise)
    {
        if (this == OvertureServiceUpdateResiliencyGroup) onOvertureServiceUpdateResiliencyGroup();
        else otherwise(Value);
    }
}
