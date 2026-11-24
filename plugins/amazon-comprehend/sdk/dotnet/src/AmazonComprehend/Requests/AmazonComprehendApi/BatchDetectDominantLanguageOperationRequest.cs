using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the BatchDetectDominantLanguage operation.
/// </summary>
public sealed record BatchDetectDominantLanguageOperationRequest
{
    public required XAmzTarget XAmzTarget { get; init; }
}
