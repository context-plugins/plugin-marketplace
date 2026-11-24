using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.Operations;

/// <summary>
/// The inputs of the DetectKeyPhrases2 operation.
/// </summary>
public sealed record DetectKeyPhrases2Request
{
    public required XAmzTarget4AmazonComprehendOperationsApi XAmzTarget { get; init; }
}
