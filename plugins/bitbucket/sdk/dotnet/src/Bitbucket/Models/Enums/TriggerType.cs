using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TriggerType>))]
public sealed record TriggerType : OpenStringEnum<TriggerType>
{
    private TriggerType(string value) : base(value)
    {
    }

    public static readonly TriggerType Push = new("PUSH");

    public static readonly TriggerType Manual = new("MANUAL");

    public static readonly TriggerType Scheduled = new("SCHEDULED");

    public static readonly TriggerType ParentStep = new("PARENT_STEP");

    public TResult Match<TResult>(Func<TResult> onPush,
        Func<TResult> onManual,
        Func<TResult> onScheduled,
        Func<TResult> onParentStep,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Push => onPush(),
            _ when this == Manual => onManual(),
            _ when this == Scheduled => onScheduled(),
            _ when this == ParentStep => onParentStep(),
            _ => otherwise(Value)
        };

    public void Match(Action onPush, Action onManual, Action onScheduled, Action onParentStep, Action<string> otherwise)
    {
        if (this == Push) onPush();
        else if (this == Manual) onManual();
        else if (this == Scheduled) onScheduled();
        else if (this == ParentStep) onParentStep();
        else otherwise(Value);
    }
}
