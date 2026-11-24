using System;
using System.Text.Json.Serialization;
using Asana.Core.Enum;

namespace Asana.Models.Enums;

/// <summary>
/// The current status of this job. The value is one of: <c>not_started</c>, <c>in_progress</c>, <c>succeeded</c>, or <c>failed</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status NotStarted = new("not_started");

    public static readonly Status InProgress = new("in_progress");

    public static readonly Status Succeeded = new("succeeded");

    public static readonly Status Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onNotStarted,
        Func<TResult> onInProgress,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NotStarted => onNotStarted(),
            _ when this == InProgress => onInProgress(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onNotStarted,
        Action onInProgress,
        Action onSucceeded,
        Action onFailed,
        Action<string> otherwise)
    {
        if (this == NotStarted) onNotStarted();
        else if (this == InProgress) onInProgress();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
