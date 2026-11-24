using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3AwsDirectConnectResiliencyGroupApi>))]
public sealed record XAmzTarget3AwsDirectConnectResiliencyGroupApi : OpenStringEnum<XAmzTarget3AwsDirectConnectResiliencyGroupApi>
{
    private XAmzTarget3AwsDirectConnectResiliencyGroupApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3AwsDirectConnectResiliencyGroupApi OvertureServiceListResiliencyGroups = new(
        "OvertureService.ListResiliencyGroups");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceListResiliencyGroups,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OvertureServiceListResiliencyGroups => onOvertureServiceListResiliencyGroups(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceListResiliencyGroups, Action<string> otherwise)
    {
        if (this == OvertureServiceListResiliencyGroups) onOvertureServiceListResiliencyGroups();
        else otherwise(Value);
    }
}
