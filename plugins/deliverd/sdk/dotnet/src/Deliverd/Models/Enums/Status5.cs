using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// open, in_progress, blocked or awaiting_approval. Finishing has its own call
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status5>))]
public sealed record Status5 : OpenStringEnum<Status5>
{
    private Status5(string value) : base(value)
    {
    }

    public static readonly Status5 Open = new("open");

    public static readonly Status5 InProgress = new("in_progress");

    public static readonly Status5 Blocked = new("blocked");

    public static readonly Status5 AwaitingApproval = new("awaiting_approval");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onInProgress,
        Func<TResult> onBlocked,
        Func<TResult> onAwaitingApproval,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == InProgress => onInProgress(),
            _ when this == Blocked => onBlocked(),
            _ when this == AwaitingApproval => onAwaitingApproval(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen,
        Action onInProgress,
        Action onBlocked,
        Action onAwaitingApproval,
        Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == InProgress) onInProgress();
        else if (this == Blocked) onBlocked();
        else if (this == AwaitingApproval) onAwaitingApproval();
        else otherwise(Value);
    }
}
