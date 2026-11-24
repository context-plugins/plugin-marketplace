using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDeliverdDevTasksApi>))]
public sealed record StatusDeliverdDevTasksApi : OpenStringEnum<StatusDeliverdDevTasksApi>
{
    private StatusDeliverdDevTasksApi(string value) : base(value)
    {
    }

    public static readonly StatusDeliverdDevTasksApi Open = new("open");

    public static readonly StatusDeliverdDevTasksApi InProgress = new("in_progress");

    public static readonly StatusDeliverdDevTasksApi Blocked = new("blocked");

    public static readonly StatusDeliverdDevTasksApi AwaitingApproval = new("awaiting_approval");

    public static readonly StatusDeliverdDevTasksApi Completed = new("completed");

    public static readonly StatusDeliverdDevTasksApi Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onInProgress,
        Func<TResult> onBlocked,
        Func<TResult> onAwaitingApproval,
        Func<TResult> onCompleted,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == InProgress => onInProgress(),
            _ when this == Blocked => onBlocked(),
            _ when this == AwaitingApproval => onAwaitingApproval(),
            _ when this == Completed => onCompleted(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen,
        Action onInProgress,
        Action onBlocked,
        Action onAwaitingApproval,
        Action onCompleted,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == InProgress) onInProgress();
        else if (this == Blocked) onBlocked();
        else if (this == AwaitingApproval) onAwaitingApproval();
        else if (this == Completed) onCompleted();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
