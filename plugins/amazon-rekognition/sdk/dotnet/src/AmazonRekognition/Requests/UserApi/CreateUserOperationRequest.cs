using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.UserApi;

/// <summary>
/// The inputs of the CreateUser operation.
/// </summary>
public sealed record CreateUserOperationRequest
{
    public required XAmzTargetAmazonRekognitionUserApi XAmzTarget { get; init; }
}
