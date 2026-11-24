using System;

namespace CircleCi.Requests.ContextApi;

/// <summary>
/// The inputs of the DeleteContext operation.
/// </summary>
public sealed record DeleteContextRequest
{
    /// <summary>
    /// The unique identifier of the context
    /// </summary>
    public required Guid ContextId { get; init; }
}
