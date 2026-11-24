using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.UserApi;

/// <summary>
/// The inputs of the SearchUsers operation.
/// </summary>
public sealed record SearchUsersOperationRequest
{
    public required XAmzTarget3AmazonRekognitionUserApi XAmzTarget { get; init; }
}
