using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the DeleteCollection operation.
/// </summary>
public sealed record DeleteCollectionOperationRequest
{
    public required XAmzTarget11 XAmzTarget { get; init; }
}
