using System;

namespace CircleCi.Requests.ContextApi;

/// <summary>
/// The inputs of the GetContext operation.
/// </summary>
public sealed record GetContextRequest
{
    /// <summary>
    /// The unique identifier of the context
    /// </summary>
    public required Guid ContextId { get; init; }
}
