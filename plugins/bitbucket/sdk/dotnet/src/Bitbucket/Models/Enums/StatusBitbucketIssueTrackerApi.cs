using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// The status of the import/export job
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusBitbucketIssueTrackerApi>))]
public sealed record StatusBitbucketIssueTrackerApi : OpenStringEnum<StatusBitbucketIssueTrackerApi>
{
    private StatusBitbucketIssueTrackerApi(string value) : base(value)
    {
    }

    public static readonly StatusBitbucketIssueTrackerApi Accepted = new("ACCEPTED");

    public static readonly StatusBitbucketIssueTrackerApi Started = new("STARTED");

    public static readonly StatusBitbucketIssueTrackerApi Running = new("RUNNING");

    public static readonly StatusBitbucketIssueTrackerApi Failure = new("FAILURE");

    public TResult Match<TResult>(Func<TResult> onAccepted,
        Func<TResult> onStarted,
        Func<TResult> onRunning,
        Func<TResult> onFailure,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Accepted => onAccepted(),
            _ when this == Started => onStarted(),
            _ when this == Running => onRunning(),
            _ when this == Failure => onFailure(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccepted, Action onStarted, Action onRunning, Action onFailure, Action<string> otherwise)
    {
        if (this == Accepted) onAccepted();
        else if (this == Started) onStarted();
        else if (this == Running) onRunning();
        else if (this == Failure) onFailure();
        else otherwise(Value);
    }
}
