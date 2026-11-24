using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DetectDominantLanguage operation.
/// </summary>
public sealed record DetectDominantLanguageOperationRequest
{
    public required XAmzTarget8 XAmzTarget { get; init; }
}
