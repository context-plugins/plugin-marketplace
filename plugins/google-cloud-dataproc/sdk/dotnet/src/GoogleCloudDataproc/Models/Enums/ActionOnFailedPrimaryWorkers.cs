using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ActionOnFailedPrimaryWorkers>))]
public sealed record ActionOnFailedPrimaryWorkers : OpenStringEnum<ActionOnFailedPrimaryWorkers>
{
    private ActionOnFailedPrimaryWorkers(string value) : base(value)
    {
    }

    public static readonly ActionOnFailedPrimaryWorkers FailureActionUnspecified = new("FAILURE_ACTION_UNSPECIFIED");

    public static readonly ActionOnFailedPrimaryWorkers NoAction = new("NO_ACTION");

    public static readonly ActionOnFailedPrimaryWorkers Delete = new("DELETE");

    public TResult Match<TResult>(Func<TResult> onFailureActionUnspecified,
        Func<TResult> onNoAction,
        Func<TResult> onDelete,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == FailureActionUnspecified => onFailureActionUnspecified(),
            _ when this == NoAction => onNoAction(),
            _ when this == Delete => onDelete(),
            _ => otherwise(Value)
        };

    public void Match(Action onFailureActionUnspecified, Action onNoAction, Action onDelete, Action<string> otherwise)
    {
        if (this == FailureActionUnspecified) onFailureActionUnspecified();
        else if (this == NoAction) onNoAction();
        else if (this == Delete) onDelete();
        else otherwise(Value);
    }
}
