using DoiT.Models;

namespace DoiT.Requests.Labels;

/// <summary>
/// The inputs of the UpdateLabel operation.
/// </summary>
public sealed record UpdateLabelOperationRequest
{
    /// <summary>
    /// Label ID
    /// </summary>
    public required string Id { get; init; }

    public UpdateLabelRequest? Body { get; init; }
}
