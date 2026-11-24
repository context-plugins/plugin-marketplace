using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the CompareFaces2 operation.
/// </summary>
public sealed record CompareFaces2Request
{
    public required XAmzTargetAmazonRekognitionFacialAnalysisApi XAmzTarget { get; init; }
}
