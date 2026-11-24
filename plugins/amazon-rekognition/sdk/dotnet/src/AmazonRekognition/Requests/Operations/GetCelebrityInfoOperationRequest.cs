using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the GetCelebrityInfo operation.
/// </summary>
public sealed record GetCelebrityInfoOperationRequest
{
    public required XAmzTarget13 XAmzTarget { get; init; }
}
