using System;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Enum;

namespace AwsDirectConnect.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget12AwsDirectConnectOperationsApi>))]
public sealed record XAmzTarget12AwsDirectConnectOperationsApi : OpenStringEnum<XAmzTarget12AwsDirectConnectOperationsApi>
{
    private XAmzTarget12AwsDirectConnectOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget12AwsDirectConnectOperationsApi OvertureServiceListResiliencyGroupAssociations = new(
        "OvertureService.ListResiliencyGroupAssociations");

    public TResult Match<TResult>(Func<TResult> onOvertureServiceListResiliencyGroupAssociations,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                OvertureServiceListResiliencyGroupAssociations => onOvertureServiceListResiliencyGroupAssociations(),
            _ => otherwise(Value)
        };

    public void Match(Action onOvertureServiceListResiliencyGroupAssociations, Action<string> otherwise)
    {
        if (this == OvertureServiceListResiliencyGroupAssociations) onOvertureServiceListResiliencyGroupAssociations();
        else otherwise(Value);
    }
}
