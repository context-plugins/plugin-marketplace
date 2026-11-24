using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AwsDirectConnectResiliencyGroupApi>))]
public sealed record XAmzTarget2AwsDirectConnectResiliencyGroupApi : OpenStringEnum<XAmzTarget2AwsDirectConnectResiliencyGroupApi>
{
    private XAmzTarget2AwsDirectConnectResiliencyGroupApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AwsDirectConnectResiliencyGroupApi OvertureServiceGetResiliencyGroup = new(
        "OvertureService.GetResiliencyGroup");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceGetResiliencyGroup, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceGetResiliencyGroup => onOvertureServiceGetResiliencyGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceGetResiliencyGroup, Action<string> otherwise)
    {
        if (this == OvertureServiceGetResiliencyGroup) onOvertureServiceGetResiliencyGroup();
        else otherwise(Value);
    }
}
