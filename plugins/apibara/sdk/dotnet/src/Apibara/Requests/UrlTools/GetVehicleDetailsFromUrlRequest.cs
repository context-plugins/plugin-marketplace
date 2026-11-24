namespace Apibara.Requests.UrlTools;

/// <summary>
/// The inputs of the GetVehicleDetailsFromUrl operation.
/// </summary>
public sealed record GetVehicleDetailsFromUrlRequest
{
    /// <summary>
    /// Vehicle URL.
    /// </summary>
    public required string Url { get; init; }
}
