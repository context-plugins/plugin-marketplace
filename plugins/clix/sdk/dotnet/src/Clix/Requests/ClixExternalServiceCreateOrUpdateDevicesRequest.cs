using Clix.Models;

namespace Clix.Requests;

/// <summary>
/// The inputs of the ClixExternalServiceCreateOrUpdateDevices operation.
/// </summary>
public sealed record ClixExternalServiceCreateOrUpdateDevicesRequest
{
    /// <summary>
    /// Request body containing device information.
    /// </summary>
    public required V1CreateOrUpdateDevicesRequest Body { get; init; }
}
