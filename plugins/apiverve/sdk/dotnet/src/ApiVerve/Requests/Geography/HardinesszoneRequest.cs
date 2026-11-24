namespace ApiVerve.Requests.Geography;

/// <summary>
/// The inputs of the Hardinesszone operation.
/// </summary>
public sealed record HardinesszoneRequest
{
    /// <summary>
    /// The zip code to get the USDA Plant Hardiness Zone for
    /// </summary>
    public required string Zip { get; init; }
}
