using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.UserApi;

/// <summary>
/// The inputs of the SearchUsersByImage operation.
/// </summary>
public sealed record SearchUsersByImageOperationRequest
{
    public required XAmzTarget4AmazonRekognitionUserApi XAmzTarget { get; init; }
}
