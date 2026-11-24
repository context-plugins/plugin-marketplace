using System;
using Shortcut.Models;

namespace Shortcut.Requests.KeyResults;

/// <summary>
/// The inputs of the UpdateKeyResult operation.
/// </summary>
public sealed record UpdateKeyResultRequest
{
    /// <summary>
    /// The ID of the Key Result.
    /// </summary>
    public required Guid KeyResultPublicId { get; init; }

    public required UpdateKeyResult Body { get; init; }
}
