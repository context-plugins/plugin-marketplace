using System;

namespace CircleCi.Requests.ContextApi;

/// <summary>
/// The inputs of the ListContextEnvironmentVariables operation.
/// </summary>
public sealed record ListContextEnvironmentVariablesRequest
{
    /// <summary>
    /// The unique identifier of the context
    /// </summary>
    public required Guid ContextId { get; init; }

    /// <summary>
    /// Token for retrieving the next page of results
    /// </summary>
    public string? PageToken { get; init; }
}
