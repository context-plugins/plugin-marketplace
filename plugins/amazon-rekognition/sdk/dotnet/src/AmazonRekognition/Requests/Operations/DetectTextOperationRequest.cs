using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the DetectText operation.
/// </summary>
public sealed record DetectTextOperationRequest
{
    public required XAmzTarget7 XAmzTarget { get; init; }
}
