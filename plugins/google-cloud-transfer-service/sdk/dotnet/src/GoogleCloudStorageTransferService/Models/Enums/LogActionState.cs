using System;
using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Enum;

namespace GoogleCloudStorageTransferService.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<LogActionState>))]
public sealed record LogActionState : OpenStringEnum<LogActionState>
{
    private LogActionState(string value) : base(value)
    {
    }

    public static readonly LogActionState LoggableActionStateUnspecified = new("LOGGABLE_ACTION_STATE_UNSPECIFIED");

    public static readonly LogActionState Succeeded = new("SUCCEEDED");

    public static readonly LogActionState Failed = new("FAILED");

    public static readonly LogActionState Skipped = new("SKIPPED");

    public TResult Match<TResult>(Func<TResult> onLoggableActionStateUnspecified,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onSkipped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LoggableActionStateUnspecified => onLoggableActionStateUnspecified(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Skipped => onSkipped(),
            _ => otherwise(Value)
        };

    public void Match(Action onLoggableActionStateUnspecified,
        Action onSucceeded,
        Action onFailed,
        Action onSkipped,
        Action<string> otherwise)
    {
        if (this == LoggableActionStateUnspecified) onLoggableActionStateUnspecified();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Skipped) onSkipped();
        else otherwise(Value);
    }
}
