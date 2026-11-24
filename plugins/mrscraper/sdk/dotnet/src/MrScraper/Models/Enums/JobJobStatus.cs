using System;
using System.Text.Json.Serialization;
using MrScraper.Core.Enum;

namespace MrScraper.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<JobJobStatus>))]
public sealed record JobJobStatus : OpenStringEnum<JobJobStatus>
{
    private JobJobStatus(string value) : base(value)
    {
    }

    public static readonly JobJobStatus StatusPending = new("PENDING");

    public static readonly JobJobStatus StatusProcessing = new("PROCESSING");

    public static readonly JobJobStatus StatusCompleted = new("COMPLETED");

    public static readonly JobJobStatus StatusFailed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onStatusPending,
        Func<TResult> onStatusProcessing,
        Func<TResult> onStatusCompleted,
        Func<TResult> onStatusFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StatusPending => onStatusPending(),
            _ when this == StatusProcessing => onStatusProcessing(),
            _ when this == StatusCompleted => onStatusCompleted(),
            _ when this == StatusFailed => onStatusFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onStatusPending,
        Action onStatusProcessing,
        Action onStatusCompleted,
        Action onStatusFailed,
        Action<string> otherwise)
    {
        if (this == StatusPending) onStatusPending();
        else if (this == StatusProcessing) onStatusProcessing();
        else if (this == StatusCompleted) onStatusCompleted();
        else if (this == StatusFailed) onStatusFailed();
        else otherwise(Value);
    }
}
