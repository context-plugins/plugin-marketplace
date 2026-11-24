using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Specify the participant that you want to flag. Omitting this parameter is equivalent to specifying both participants.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ParticipantRole1>))]
public sealed record ParticipantRole1 : OpenStringEnum<ParticipantRole1>
{
    private ParticipantRole1(string value) : base(value)
    {
    }

    public static readonly ParticipantRole1 Agent = new("AGENT");

    public static readonly ParticipantRole1 Customer = new("CUSTOMER");

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
