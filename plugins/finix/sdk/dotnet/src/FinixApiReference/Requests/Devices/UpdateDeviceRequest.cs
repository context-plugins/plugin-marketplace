using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.Devices;

/// <summary>
/// The inputs of the UpdateDevice operation.
/// </summary>
public sealed record UpdateDeviceRequest
{
    /// <summary>
    /// The <c>Device</c> ID.
    /// </summary>
    public required string DeviceId { get; init; }

    public required DevicesRequest Body { get; init; }
}
