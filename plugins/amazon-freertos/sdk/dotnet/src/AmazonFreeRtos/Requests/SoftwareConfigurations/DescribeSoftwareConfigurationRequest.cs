namespace AmazonFreeRtos.Requests.SoftwareConfigurations;

/// <summary>
/// The inputs of the DescribeSoftwareConfiguration operation.
/// </summary>
public sealed record DescribeSoftwareConfigurationRequest
{
    /// <summary>
    /// ID of the software configuration.
    /// </summary>
    public required string ConfigId { get; init; }
}
