using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAwsDirectConnectResiliencyGroupApi>))]
public sealed record XAmzTargetAwsDirectConnectResiliencyGroupApi : OpenStringEnum<XAmzTargetAwsDirectConnectResiliencyGroupApi>
{
    private XAmzTargetAwsDirectConnectResiliencyGroupApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAwsDirectConnectResiliencyGroupApi OvertureServiceCreateResiliencyGroup = new(
        "OvertureService.CreateResiliencyGroup");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceCreateResiliencyGroup,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceCreateResiliencyGroup => onOvertureServiceCreateResiliencyGroup(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceCreateResiliencyGroup, Action<string> otherwise)
    {
        if (this == OvertureServiceCreateResiliencyGroup) onOvertureServiceCreateResiliencyGroup();
        else otherwise(Value);
    }
}
