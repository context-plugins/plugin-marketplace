using System;
using System.Net;

namespace AwsStepFunctions.Core.Configuration;

public sealed record RetryAttempt
{
    public required int AttemptNumber { get; init; }
    public required TimeSpan Delay { get; init; }
    public required RetryReason Reason { get; init; }
}

public abstract record RetryReason
{
    private RetryReason() { }

    public sealed record Status(HttpStatusCode StatusCode) : RetryReason;

    public sealed record Failure(Exception Exception) : RetryReason;
}
