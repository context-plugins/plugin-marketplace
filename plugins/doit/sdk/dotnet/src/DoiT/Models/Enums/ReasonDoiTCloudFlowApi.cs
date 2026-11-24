using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ReasonDoiTCloudFlowApi>))]
public sealed record ReasonDoiTCloudFlowApi : OpenStringEnum<ReasonDoiTCloudFlowApi>
{
    private ReasonDoiTCloudFlowApi(string value) : base(value)
    {
    }

    public static readonly ReasonDoiTCloudFlowApi ConnectionCleared = new("connection_cleared");

    public static readonly ReasonDoiTCloudFlowApi DatastoreTableCleared = new("datastore_table_cleared");

    public static readonly ReasonDoiTCloudFlowApi PolicyCleared = new("policy_cleared");

    public static readonly ReasonDoiTCloudFlowApi SlackChannelCleared = new("slack_channel_cleared");

    public TResult Match<TResult>(Func<TResult> onConnectionCleared,
        Func<TResult> onDatastoreTableCleared,
        Func<TResult> onPolicyCleared,
        Func<TResult> onSlackChannelCleared,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ConnectionCleared => onConnectionCleared(),
            _ when this == DatastoreTableCleared => onDatastoreTableCleared(),
            _ when this == PolicyCleared => onPolicyCleared(),
            _ when this == SlackChannelCleared => onSlackChannelCleared(),
            _ => otherwise(Value)
        };

    public void Match(Action onConnectionCleared,
        Action onDatastoreTableCleared,
        Action onPolicyCleared,
        Action onSlackChannelCleared,
        Action<string> otherwise)
    {
        if (this == ConnectionCleared) onConnectionCleared();
        else if (this == DatastoreTableCleared) onDatastoreTableCleared();
        else if (this == PolicyCleared) onPolicyCleared();
        else if (this == SlackChannelCleared) onSlackChannelCleared();
        else otherwise(Value);
    }
}
