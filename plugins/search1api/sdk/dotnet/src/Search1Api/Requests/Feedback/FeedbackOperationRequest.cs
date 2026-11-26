using Search1Api.Models;

namespace Search1Api.Requests.Feedback;

/// <summary>
/// The inputs of the FeedbackInvoke operation.
/// </summary>
public sealed record FeedbackOperationRequest
{
    public required FeedbackRequest Body { get; init; }
}
