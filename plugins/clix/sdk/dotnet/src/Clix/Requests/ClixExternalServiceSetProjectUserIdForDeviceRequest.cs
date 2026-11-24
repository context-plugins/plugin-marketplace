using Clix.Models;

namespace Clix.Requests;

/// <summary>
/// The inputs of the ClixExternalServiceSetProjectUserIdForDevice operation.
/// </summary>
public sealed record ClixExternalServiceSetProjectUserIdForDeviceRequest
{
    public required string DeviceId { get; init; }

    /// <summary>
    /// Request body containing the project user ID to set for the device.
    /// </summary>
    public required ClixExternalServiceSetProjectUserIdForDeviceBody Body { get; init; }
}
