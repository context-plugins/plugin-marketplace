using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// How far the call has got. <c>agent_ringing</c> may be skipped — see the description above.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State Accepted = new("accepted");

    public static readonly State AgentRinging = new("agent_ringing");

    public static readonly State AgentAnswered = new("agent_answered");

    public static readonly State CustomerRinging = new("customer_ringing");

    public static readonly State Bridged = new("bridged");

    public static readonly State Completed = new("completed");

    public static readonly State Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onAccepted,
        Func<TResult> onAgentRinging,
        Func<TResult> onAgentAnswered,
        Func<TResult> onCustomerRinging,
        Func<TResult> onBridged,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Accepted => onAccepted(),
            _ when this == AgentRinging => onAgentRinging(),
            _ when this == AgentAnswered => onAgentAnswered(),
            _ when this == CustomerRinging => onCustomerRinging(),
            _ when this == Bridged => onBridged(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccepted,
        Action onAgentRinging,
        Action onAgentAnswered,
        Action onCustomerRinging,
        Action onBridged,
        Action onCompleted,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == Accepted) onAccepted();
        else if (this == AgentRinging) onAgentRinging();
        else if (this == AgentAnswered) onAgentAnswered();
        else if (this == CustomerRinging) onCustomerRinging();
        else if (this == Bridged) onBridged();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
