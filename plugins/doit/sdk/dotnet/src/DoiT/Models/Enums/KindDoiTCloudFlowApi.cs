using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<KindDoiTCloudFlowApi>))]
public sealed record KindDoiTCloudFlowApi : OpenStringEnum<KindDoiTCloudFlowApi>
{
    private KindDoiTCloudFlowApi(string value) : base(value)
    {
    }

    public static readonly KindDoiTCloudFlowApi Policy = new("policy");

    public static readonly KindDoiTCloudFlowApi SlackChannel = new("slackChannel");

    public TResult Match<TResult>(Func<TResult> onPolicy,
        Func<TResult> onSlackChannel,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Policy => onPolicy(),
            _ when this == SlackChannel => onSlackChannel(),
            _ => otherwise(Value)
        };

    public void Match(Action onPolicy, Action onSlackChannel, Action<string> otherwise)
    {
        if (this == Policy) onPolicy();
        else if (this == SlackChannel) onSlackChannel();
        else otherwise(Value);
    }
}
