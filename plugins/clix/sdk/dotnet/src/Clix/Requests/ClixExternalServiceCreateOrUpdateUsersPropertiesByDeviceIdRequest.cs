using Clix.Models;

namespace Clix.Requests;

/// <summary>
/// The inputs of the ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceId operation.
/// </summary>
public sealed record ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdRequest
{
    public required string DeviceId { get; init; }

    /// <summary>
    /// Request body containing user properties to create or update.
    /// </summary>
    public required ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody Body { get; init; }
}
