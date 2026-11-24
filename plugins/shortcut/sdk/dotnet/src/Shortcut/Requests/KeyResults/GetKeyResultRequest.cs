using System;

namespace Shortcut.Requests.KeyResults;

/// <summary>
/// The inputs of the GetKeyResult operation.
/// </summary>
public sealed record GetKeyResultRequest
{
    /// <summary>
    /// The ID of the Key Result.
    /// </summary>
    public required Guid KeyResultPublicId { get; init; }
}
