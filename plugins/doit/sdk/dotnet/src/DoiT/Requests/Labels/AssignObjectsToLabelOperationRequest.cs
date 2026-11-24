using DoiT.Models;

namespace DoiT.Requests.Labels;

/// <summary>
/// The inputs of the AssignObjectsToLabel operation.
/// </summary>
public sealed record AssignObjectsToLabelOperationRequest
{
    /// <summary>
    /// Label ID
    /// </summary>
    public required string Id { get; init; }

    public required AssignObjectsToLabelRequest Body { get; init; }
}
