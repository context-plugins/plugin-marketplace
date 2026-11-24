using DoiT.Models;

namespace DoiT.Requests.Labels;

/// <summary>
/// The inputs of the CreateLabel operation.
/// </summary>
public sealed record CreateLabelOperationRequest
{
    public required CreateLabelRequest Body { get; init; }
}
