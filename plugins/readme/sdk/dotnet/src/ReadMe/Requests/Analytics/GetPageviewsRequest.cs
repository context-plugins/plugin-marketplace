using System;

namespace ReadMe.Requests.Analytics;

/// <summary>
/// The inputs of the GetPageviews operation.
/// </summary>
public sealed record GetPageviewsRequest
{
    public DateTimeOffset? Start { get; init; }

    public DateTimeOffset? End { get; init; }
}
