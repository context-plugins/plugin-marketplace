using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<NotificationScanStateDto>))]
public sealed record NotificationScanStateDto : OpenStringEnum<NotificationScanStateDto>
{
    private NotificationScanStateDto(string value) : base(value)
    {
    }

    public static readonly NotificationScanStateDto Failed = new("failed");

    public static readonly NotificationScanStateDto TimedOut = new("timedOut");

    public static readonly NotificationScanStateDto Canceled = new("canceled");

    public static readonly NotificationScanStateDto CompletedWithErrors = new("completedWithErrors");

    public TResult Match<TResult>(Func<TResult> onFailed,
        Func<TResult> onTimedOut,
        Func<TResult> onCanceled,
        Func<TResult> onCompletedWithErrors,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Failed => onFailed(),
            _ when this == TimedOut => onTimedOut(),
            _ when this == Canceled => onCanceled(),
            _ when this == CompletedWithErrors => onCompletedWithErrors(),
            _ => otherwise(Value)
        };

    public void Match(Action onFailed,
        Action onTimedOut,
        Action onCanceled,
        Action onCompletedWithErrors,
        Action<string> otherwise)
    {
        if (this == Failed) onFailed();
        else if (this == TimedOut) onTimedOut();
        else if (this == Canceled) onCanceled();
        else if (this == CompletedWithErrors) onCompletedWithErrors();
        else otherwise(Value);
    }
}
