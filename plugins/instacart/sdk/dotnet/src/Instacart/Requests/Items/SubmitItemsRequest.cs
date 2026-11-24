using Instacart.Models;

namespace Instacart.Requests.Items;

/// <summary>
/// The inputs of the SubmitItems operation.
/// </summary>
public sealed record SubmitItemsRequest
{
    public required ItemSubmissionRequest Body { get; init; }
}
