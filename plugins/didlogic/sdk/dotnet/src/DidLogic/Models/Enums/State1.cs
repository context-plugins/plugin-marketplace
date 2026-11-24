using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// How far the call got. <c>agent_ringing</c> may be skipped — see the description above.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State1>))]
public sealed record State1 : OpenStringEnum<State1>
{
    private State1(string value) : base(value)
    {
    }

    public static readonly State1 Accepted = new("accepted");

    public static readonly State1 AgentRinging = new("agent_ringing");

    public static readonly State1 AgentAnswered = new("agent_answered");

    public static readonly State1 CustomerRinging = new("customer_ringing");

    public static readonly State1 Bridged = new("bridged");

    public static readonly State1 Completed = new("completed");

    public static readonly State1 Failed = new("failed");

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
