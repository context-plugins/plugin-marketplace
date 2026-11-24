using AmazonFreeRtos.Models;

namespace AmazonFreeRtos.Requests.SoftwareConfigurations;

/// <summary>
/// The inputs of the CreateSoftwareConfiguration operation.
/// </summary>
public sealed record CreateSoftwareConfigurationOperationRequest
{
    public required CreateSoftwareConfigurationRequest Body { get; init; }
}
