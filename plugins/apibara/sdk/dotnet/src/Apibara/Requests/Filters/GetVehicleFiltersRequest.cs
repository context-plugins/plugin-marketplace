namespace Apibara.Requests.Filters;

/// <summary>
/// The inputs of the GetVehicleFilters operation.
/// </summary>
public sealed record GetVehicleFiltersRequest
{
    /// <summary>
    /// Vehicle make used to return dependent generation options.
    /// </summary>
    public string? Make { get; init; }

    /// <summary>
    /// Optional series/model-family context used with make to narrow dependent generation options.
    /// </summary>
    public string? Series { get; init; }

    /// <summary>
    /// Vehicle model used together with make to return dependent generation options.
    /// </summary>
    public string? Model { get; init; }
}
