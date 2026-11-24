namespace DidLogic.Requests.NumbersInventory;

/// <summary>
/// The inputs of the NumbersCountriesCitiesDidsIndex operation.
/// </summary>
public sealed record NumbersCountriesCitiesDidsIndexRequest
{
    /// <summary>
    /// Country id from numbers_countries_index
    /// </summary>
    public required int CountryId { get; init; }

    /// <summary>
    /// City id from numbers_countries_cities_index, numbers_countries_locations_index
    /// </summary>
    public required int CityId { get; init; }
}
