using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<QaAgentResultStatus>))]
public sealed record QaAgentResultStatus : OpenStringEnum<QaAgentResultStatus>
{
    private QaAgentResultStatus(string value) : base(value)
    {
    }

    public static readonly QaAgentResultStatus Queued = new("queued");

    public static readonly QaAgentResultStatus Completed = new("completed");

    public static readonly QaAgentResultStatus Error = new("error");

    public static readonly QaAgentResultStatus Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onCompleted,
        Func<TResult> onError,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Completed => onCompleted(),
            _ when this == Error => onError(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued, Action onCompleted, Action onError, Action onCancelled, Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Completed) onCompleted();
        else if (this == Error) onError();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
