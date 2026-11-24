namespace AmazonFreeRtos.Requests.SoftwareConfigurations;

/// <summary>
/// The inputs of the DeleteSoftwareConfiguration operation.
/// </summary>
public sealed record DeleteSoftwareConfigurationRequest
{
    /// <summary>
    /// ID of the software configuration to delete.
    /// </summary>
    public required string ConfigId { get; init; }
}
