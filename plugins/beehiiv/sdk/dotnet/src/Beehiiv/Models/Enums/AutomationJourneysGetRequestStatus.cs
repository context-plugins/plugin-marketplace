using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AutomationJourneysGetRequestStatus>))]
public sealed record AutomationJourneysGetRequestStatus : OpenStringEnum<AutomationJourneysGetRequestStatus>
{
    private AutomationJourneysGetRequestStatus(string value) : base(value)
    {
    }

    public static readonly AutomationJourneysGetRequestStatus InProgress = new("in_progress");

    public static readonly AutomationJourneysGetRequestStatus Completed = new("completed");

    public static readonly AutomationJourneysGetRequestStatus ExitedEarly = new("exited_early");

    public static readonly AutomationJourneysGetRequestStatus All = new("all");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onCompleted,
        Func<TResult> onExitedEarly,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Completed => onCompleted(),
            _ when this == ExitedEarly => onExitedEarly(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress,
        Action onCompleted,
        Action onExitedEarly,
        Action onAll,
        Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Completed) onCompleted();
        else if (this == ExitedEarly) onExitedEarly();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
