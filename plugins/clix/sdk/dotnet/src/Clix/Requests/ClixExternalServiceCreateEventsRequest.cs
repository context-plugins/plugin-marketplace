using Clix.Models;

namespace Clix.Requests;

/// <summary>
/// The inputs of the ClixExternalServiceCreateEvents operation.
/// </summary>
public sealed record ClixExternalServiceCreateEventsRequest
{
    /// <summary>
    /// Request body containing the event details.
    /// </summary>
    public required V1CreateEventsRequest Body { get; init; }
}
