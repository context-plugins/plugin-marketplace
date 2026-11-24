using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DetectKeyPhrases operation.
/// </summary>
public sealed record DetectKeyPhrasesOperationRequest
{
    public required XAmzTarget10 XAmzTarget { get; init; }
}
