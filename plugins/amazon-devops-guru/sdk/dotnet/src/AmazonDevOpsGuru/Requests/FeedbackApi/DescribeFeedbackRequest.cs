using AmazonDevOpsGuru.Models;

namespace AmazonDevOpsGuru.Requests.FeedbackApi;

/// <summary>
/// The inputs of the DescribeFeedback operation.
/// </summary>
public sealed record DescribeFeedbackRequest
{
    public FeedbackRequest? Body { get; init; }
}
