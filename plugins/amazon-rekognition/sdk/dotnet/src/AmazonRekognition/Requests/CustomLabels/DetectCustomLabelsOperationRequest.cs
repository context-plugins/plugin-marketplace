using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.CustomLabels;

/// <summary>
/// The inputs of the DetectCustomLabels operation.
/// </summary>
public sealed record DetectCustomLabelsOperationRequest
{
    public required XAmzTargetAmazonRekognitionCustomLabelsApi XAmzTarget { get; init; }
}
