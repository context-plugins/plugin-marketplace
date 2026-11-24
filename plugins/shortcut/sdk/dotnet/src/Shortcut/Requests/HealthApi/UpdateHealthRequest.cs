using System;
using Shortcut.Models;

namespace Shortcut.Requests.HealthApi;

/// <summary>
/// The inputs of the UpdateHealth operation.
/// </summary>
public sealed record UpdateHealthRequest
{
    /// <summary>
    /// The unique ID of the Health record.
    /// </summary>
    public required Guid HealthPublicId { get; init; }

    public required UpdateHealth Body { get; init; }
}
