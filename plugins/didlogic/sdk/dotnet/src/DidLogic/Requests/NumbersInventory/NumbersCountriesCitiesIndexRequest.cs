namespace DidLogic.Requests.NumbersInventory;

/// <summary>
/// The inputs of the NumbersCountriesCitiesIndex operation.
/// </summary>
public sealed record NumbersCountriesCitiesIndexRequest
{
    /// <summary>
    /// Country id from numbers_countries_index
    /// </summary>
    public required int CountryId { get; init; }
}
