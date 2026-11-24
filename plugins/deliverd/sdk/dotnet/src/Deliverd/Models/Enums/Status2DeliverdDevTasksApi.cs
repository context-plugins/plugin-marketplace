using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status2DeliverdDevTasksApi>))]
public sealed record Status2DeliverdDevTasksApi : OpenStringEnum<Status2DeliverdDevTasksApi>
{
    private Status2DeliverdDevTasksApi(string value) : base(value)
    {
    }

    public static readonly Status2DeliverdDevTasksApi Open = new("open");

    public static readonly Status2DeliverdDevTasksApi InProgress = new("in_progress");

    public static readonly Status2DeliverdDevTasksApi Blocked = new("blocked");

    public static readonly Status2DeliverdDevTasksApi AwaitingApproval = new("awaiting_approval");

    public static readonly Status2DeliverdDevTasksApi Completed = new("completed");

    public static readonly Status2DeliverdDevTasksApi Cancelled = new("cancelled");

    public static readonly Status2DeliverdDevTasksApi Active = new("active");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onInProgress,
        Func<TResult> onBlocked,
        Func<TResult> onAwaitingApproval,
        Func<TResult> onCompleted,
        Func<TResult> onCancelled,
        Func<TResult> onActive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == InProgress => onInProgress(),
            _ when this == Blocked => onBlocked(),
            _ when this == AwaitingApproval => onAwaitingApproval(),
            _ when this == Completed => onCompleted(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Active => onActive(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen,
        Action onInProgress,
        Action onBlocked,
        Action onAwaitingApproval,
        Action onCompleted,
        Action onCancelled,
        Action onActive,
        Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == InProgress) onInProgress();
        else if (this == Blocked) onBlocked();
        else if (this == AwaitingApproval) onAwaitingApproval();
        else if (this == Completed) onCompleted();
        else if (this == Cancelled) onCancelled();
        else if (this == Active) onActive();
        else otherwise(Value);
    }
}
