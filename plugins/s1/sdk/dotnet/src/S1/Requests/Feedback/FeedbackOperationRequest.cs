using S1.Models;

namespace S1.Requests.Feedback;

/// <summary>
/// The inputs of the FeedbackInvoke operation.
/// </summary>
public sealed record FeedbackOperationRequest
{
    public required FeedbackRequest Body { get; init; }
}
