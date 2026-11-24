using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Specify the interrupter that you want to flag. Omitting this parameter is equivalent to specifying both participants.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ParticipantRole>))]
public sealed record ParticipantRole : OpenStringEnum<ParticipantRole>
{
    private ParticipantRole(string value) : base(value)
    {
    }

    public static readonly ParticipantRole Agent = new("AGENT");

    public static readonly ParticipantRole Customer = new("CUSTOMER");

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
