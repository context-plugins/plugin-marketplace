using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<AutomationJourneyStatus>))]
public sealed record AutomationJourneyStatus : OpenStringEnum<AutomationJourneyStatus>
{
    private AutomationJourneyStatus(string value) : base(value)
    {
    }

    public static readonly AutomationJourneyStatus InProgress = new("in_progress");

    public static readonly AutomationJourneyStatus Completed = new("completed");

    public static readonly AutomationJourneyStatus ExitedEarly = new("exited_early");

    public static readonly AutomationJourneyStatus ManuallyRemoved = new("manually_removed");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onCompleted,
        Func<TResult> onExitedEarly,
        Func<TResult> onManuallyRemoved,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Completed => onCompleted(),
            _ when this == ExitedEarly => onExitedEarly(),
            _ when this == ManuallyRemoved => onManuallyRemoved(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress,
        Action onCompleted,
        Action onExitedEarly,
        Action onManuallyRemoved,
        Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Completed) onCompleted();
        else if (this == ExitedEarly) onExitedEarly();
        else if (this == ManuallyRemoved) onManuallyRemoved();
        else otherwise(Value);
    }
}
