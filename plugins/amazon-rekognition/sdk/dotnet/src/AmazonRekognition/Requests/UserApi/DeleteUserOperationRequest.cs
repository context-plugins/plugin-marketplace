using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.UserApi;

/// <summary>
/// The inputs of the DeleteUser operation.
/// </summary>
public sealed record DeleteUserOperationRequest
{
    public required XAmzTarget1AmazonRekognitionUserApi XAmzTarget { get; init; }
}
