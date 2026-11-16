using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Status of the <c>onboarding_form</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status2>))]
public sealed record Status2 : OpenStringEnum<Status2>
{
    private Status2(string value) : base(value)
    {
    }

    public static readonly Status2 InProgress = new("IN_PROGRESS");

    public static readonly Status2 Completed = new("COMPLETED");

    public static readonly Status2 UpdateRequested = new("UPDATE_REQUESTED");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onCompleted,
        Func<TResult> onUpdateRequested,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Completed => onCompleted(),
            _ when this == UpdateRequested => onUpdateRequested(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress, Action onCompleted, Action onUpdateRequested, Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Completed) onCompleted();
        else if (this == UpdateRequested) onUpdateRequested();
        else otherwise(Value);
    }
}
