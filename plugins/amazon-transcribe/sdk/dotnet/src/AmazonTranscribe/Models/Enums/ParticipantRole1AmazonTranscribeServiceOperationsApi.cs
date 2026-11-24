using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Provides the role of the speaker for each audio channel, either CUSTOMER or AGENT.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ParticipantRole1AmazonTranscribeServiceOperationsApi>))]
public sealed record ParticipantRole1AmazonTranscribeServiceOperationsApi : OpenStringEnum<ParticipantRole1AmazonTranscribeServiceOperationsApi>
{
    private ParticipantRole1AmazonTranscribeServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly ParticipantRole1AmazonTranscribeServiceOperationsApi Agent = new("AGENT");

    public static readonly ParticipantRole1AmazonTranscribeServiceOperationsApi Customer = new("CUSTOMER");

    public TResult Match<TResult>(Func<TResult> onAgent, Func<TResult> onCustomer, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Agent => onAgent(),
            _ when this == Customer => onCustomer(),
            _ => otherwise(Value)
        };

    public void Match(Action onAgent, Action onCustomer, Action<string> otherwise)
    {
        if (this == Agent) onAgent();
        else if (this == Customer) onCustomer();
        else otherwise(Value);
    }
}
