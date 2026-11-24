using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.ProjectVersion;

/// <summary>
/// The inputs of the StopProjectVersion operation.
/// </summary>
public sealed record StopProjectVersionOperationRequest
{
    public required XAmzTarget4AmazonRekognitionProjectVersionApi XAmzTarget { get; init; }
}
