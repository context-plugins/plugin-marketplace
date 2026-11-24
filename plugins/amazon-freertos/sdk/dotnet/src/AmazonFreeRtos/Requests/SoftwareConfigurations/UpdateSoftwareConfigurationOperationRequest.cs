using AmazonFreeRtos.Models;

namespace AmazonFreeRtos.Requests.SoftwareConfigurations;

/// <summary>
/// The inputs of the UpdateSoftwareConfiguration operation.
/// </summary>
public sealed record UpdateSoftwareConfigurationOperationRequest
{
    /// <summary>
    /// ID of the software configuration to update.
    /// </summary>
    public required string ConfigId { get; init; }

    public required UpdateSoftwareConfigurationRequest Body { get; init; }
}
