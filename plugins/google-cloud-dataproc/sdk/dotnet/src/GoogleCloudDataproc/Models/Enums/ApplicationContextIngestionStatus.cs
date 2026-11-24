using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ApplicationContextIngestionStatus>))]
public sealed record ApplicationContextIngestionStatus : OpenStringEnum<ApplicationContextIngestionStatus>
{
    private ApplicationContextIngestionStatus(string value) : base(value)
    {
    }

    public static readonly ApplicationContextIngestionStatus ApplicationContextIngestionStatusUnspecified = new(
        "APPLICATION_CONTEXT_INGESTION_STATUS_UNSPECIFIED");

    public static readonly ApplicationContextIngestionStatus ApplicationContextIngestionStatusCompleted = new(
        "APPLICATION_CONTEXT_INGESTION_STATUS_COMPLETED");

    public TResult Match<TResult>(Func<TResult> onApplicationContextIngestionStatusUnspecified,
        Func<TResult> onApplicationContextIngestionStatusCompleted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                ApplicationContextIngestionStatusUnspecified => onApplicationContextIngestionStatusUnspecified(),
            _ when this == ApplicationContextIngestionStatusCompleted => onApplicationContextIngestionStatusCompleted(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplicationContextIngestionStatusUnspecified,
        Action onApplicationContextIngestionStatusCompleted,
        Action<string> otherwise)
    {
        if (this == ApplicationContextIngestionStatusUnspecified) onApplicationContextIngestionStatusUnspecified();
        else if (this == ApplicationContextIngestionStatusCompleted) onApplicationContextIngestionStatusCompleted();
        else otherwise(Value);
    }
}
