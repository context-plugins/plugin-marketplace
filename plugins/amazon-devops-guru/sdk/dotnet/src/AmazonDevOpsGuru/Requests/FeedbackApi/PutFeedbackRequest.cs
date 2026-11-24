using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.FeedbackApi;

/// <summary>
/// The inputs of the PutFeedback operation.
/// </summary>
public sealed record PutFeedbackRequest
{
    public DescribeFeedbackResponse? Body { get; init; }
}
