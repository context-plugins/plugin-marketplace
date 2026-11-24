using DoiT.Models;

namespace DoiT.Requests.Ava;

/// <summary>
/// The inputs of the AvaFeedback operation.
/// </summary>
public sealed record AvaFeedbackOperationRequest
{
    public required AvaFeedbackRequest Body { get; init; }
}
