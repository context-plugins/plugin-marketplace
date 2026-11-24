using BrowserStack.Models.Enums;

namespace BrowserStack.Requests.Builds;

/// <summary>
/// The inputs of the ListBuilds operation.
/// </summary>
public sealed record ListBuildsRequest
{
    public int? Limit { get; init; }

    public int? Offset { get; init; }

    public Status? Status { get; init; }
}
