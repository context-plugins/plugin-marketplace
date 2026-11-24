using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the BatchDetectKeyPhrases operation.
/// </summary>
public sealed record BatchDetectKeyPhrasesOperationRequest
{
    public required XAmzTarget2 XAmzTarget { get; init; }
}
