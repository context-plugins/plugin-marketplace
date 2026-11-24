namespace ApiVerve.Requests.Geography;

/// <summary>
/// The inputs of the Zipcodes operation.
/// </summary>
public sealed record ZipcodesRequest
{
    /// <summary>
    /// The zip code for which you want to get the data
    /// </summary>
    public required string Zip { get; init; }
}
