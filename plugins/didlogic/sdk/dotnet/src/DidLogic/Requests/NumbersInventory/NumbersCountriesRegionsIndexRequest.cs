namespace DidLogic.Requests.NumbersInventory;

/// <summary>
/// The inputs of the NumbersCountriesRegionsIndex operation.
/// </summary>
public sealed record NumbersCountriesRegionsIndexRequest
{
    /// <summary>
    /// Country id from numbers_countries_index
    /// </summary>
    public required int CountryId { get; init; }
}
