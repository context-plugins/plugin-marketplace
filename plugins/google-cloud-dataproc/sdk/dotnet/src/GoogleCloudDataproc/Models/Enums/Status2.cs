using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status2>))]
public sealed record Status2 : OpenStringEnum<Status2>
{
    private Status2(string value) : base(value)
    {
    }

    public static readonly Status2 StageStatusUnspecified = new("STAGE_STATUS_UNSPECIFIED");

    public static readonly Status2 StageStatusActive = new("STAGE_STATUS_ACTIVE");

    public static readonly Status2 StageStatusComplete = new("STAGE_STATUS_COMPLETE");

    public static readonly Status2 StageStatusFailed = new("STAGE_STATUS_FAILED");

    public static readonly Status2 StageStatusPending = new("STAGE_STATUS_PENDING");

    public static readonly Status2 StageStatusSkipped = new("STAGE_STATUS_SKIPPED");

    public TResult Match<TResult>(Func<TResult> onStageStatusUnspecified,
        Func<TResult> onStageStatusActive,
        Func<TResult> onStageStatusComplete,
        Func<TResult> onStageStatusFailed,
        Func<TResult> onStageStatusPending,
        Func<TResult> onStageStatusSkipped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StageStatusUnspecified => onStageStatusUnspecified(),
            _ when this == StageStatusActive => onStageStatusActive(),
            _ when this == StageStatusComplete => onStageStatusComplete(),
            _ when this == StageStatusFailed => onStageStatusFailed(),
            _ when this == StageStatusPending => onStageStatusPending(),
            _ when this == StageStatusSkipped => onStageStatusSkipped(),
            _ => otherwise(Value)
        };

    public void Match(Action onStageStatusUnspecified,
        Action onStageStatusActive,
        Action onStageStatusComplete,
        Action onStageStatusFailed,
        Action onStageStatusPending,
        Action onStageStatusSkipped,
        Action<string> otherwise)
    {
        if (this == StageStatusUnspecified) onStageStatusUnspecified();
        else if (this == StageStatusActive) onStageStatusActive();
        else if (this == StageStatusComplete) onStageStatusComplete();
        else if (this == StageStatusFailed) onStageStatusFailed();
        else if (this == StageStatusPending) onStageStatusPending();
        else if (this == StageStatusSkipped) onStageStatusSkipped();
        else otherwise(Value);
    }
}
