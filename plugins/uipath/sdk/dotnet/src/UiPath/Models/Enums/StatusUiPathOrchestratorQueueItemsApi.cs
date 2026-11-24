using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Current processing status of the queue item
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusUiPathOrchestratorQueueItemsApi>))]
public sealed record StatusUiPathOrchestratorQueueItemsApi : OpenStringEnum<StatusUiPathOrchestratorQueueItemsApi>
{
    private StatusUiPathOrchestratorQueueItemsApi(string value) : base(value)
    {
    }

    public static readonly StatusUiPathOrchestratorQueueItemsApi New = new("New");

    public static readonly StatusUiPathOrchestratorQueueItemsApi InProgress = new("InProgress");

    public static readonly StatusUiPathOrchestratorQueueItemsApi Failed = new("Failed");

    public static readonly StatusUiPathOrchestratorQueueItemsApi Successful = new("Successful");

    public static readonly StatusUiPathOrchestratorQueueItemsApi Abandoned = new("Abandoned");

    public static readonly StatusUiPathOrchestratorQueueItemsApi Retried = new("Retried");

    public static readonly StatusUiPathOrchestratorQueueItemsApi Deleted = new("Deleted");

    public TResult Match<TResult>(Func<TResult> onNew,
        Func<TResult> onInProgress,
        Func<TResult> onFailed,
        Func<TResult> onSuccessful,
        Func<TResult> onAbandoned,
        Func<TResult> onRetried,
        Func<TResult> onDeleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == New => onNew(),
            _ when this == InProgress => onInProgress(),
            _ when this == Failed => onFailed(),
            _ when this == Successful => onSuccessful(),
            _ when this == Abandoned => onAbandoned(),
            _ when this == Retried => onRetried(),
            _ when this == Deleted => onDeleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onNew,
        Action onInProgress,
        Action onFailed,
        Action onSuccessful,
        Action onAbandoned,
        Action onRetried,
        Action onDeleted,
        Action<string> otherwise)
    {
        if (this == New) onNew();
        else if (this == InProgress) onInProgress();
        else if (this == Failed) onFailed();
        else if (this == Successful) onSuccessful();
        else if (this == Abandoned) onAbandoned();
        else if (this == Retried) onRetried();
        else if (this == Deleted) onDeleted();
        else otherwise(Value);
    }
}
