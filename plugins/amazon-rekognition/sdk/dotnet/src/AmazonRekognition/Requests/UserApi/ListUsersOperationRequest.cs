using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.UserApi;

/// <summary>
/// The inputs of the ListUsers operation.
/// </summary>
public sealed record ListUsersOperationRequest
{
    public required XAmzTarget2AmazonRekognitionUserApi XAmzTarget { get; init; }
}
