using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PublicApiOnboardingStateDto>))]
public sealed record PublicApiOnboardingStateDto : OpenStringEnum<PublicApiOnboardingStateDto>
{
    private PublicApiOnboardingStateDto(string value) : base(value)
    {
    }

    public static readonly PublicApiOnboardingStateDto Queued = new("queued");

    public static readonly PublicApiOnboardingStateDto Processing = new("processing");

    public static readonly PublicApiOnboardingStateDto Completed = new("completed");

    public static readonly PublicApiOnboardingStateDto Failed = new("failed");

    public static readonly PublicApiOnboardingStateDto Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onProcessing,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == Processing => onProcessing(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onProcessing,
        Action onCompleted,
        Action onFailed,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == Processing) onProcessing();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
