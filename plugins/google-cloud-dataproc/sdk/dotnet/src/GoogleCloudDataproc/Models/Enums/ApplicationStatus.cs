using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ApplicationStatus>))]
public sealed record ApplicationStatus : OpenStringEnum<ApplicationStatus>
{
    private ApplicationStatus(string value) : base(value)
    {
    }

    public static readonly ApplicationStatus ApplicationStatusUnspecified = new("APPLICATION_STATUS_UNSPECIFIED");

    public static readonly ApplicationStatus ApplicationStatusRunning = new("APPLICATION_STATUS_RUNNING");

    public static readonly ApplicationStatus ApplicationStatusCompleted = new("APPLICATION_STATUS_COMPLETED");

    public TResult Match<TResult>(Func<TResult> onApplicationStatusUnspecified,
        Func<TResult> onApplicationStatusRunning,
        Func<TResult> onApplicationStatusCompleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApplicationStatusUnspecified => onApplicationStatusUnspecified(),
            _ when this == ApplicationStatusRunning => onApplicationStatusRunning(),
            _ when this == ApplicationStatusCompleted => onApplicationStatusCompleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplicationStatusUnspecified,
        Action onApplicationStatusRunning,
        Action onApplicationStatusCompleted,
        Action<string> otherwise)
    {
        if (this == ApplicationStatusUnspecified) onApplicationStatusUnspecified();
        else if (this == ApplicationStatusRunning) onApplicationStatusRunning();
        else if (this == ApplicationStatusCompleted) onApplicationStatusCompleted();
        else otherwise(Value);
    }
}
