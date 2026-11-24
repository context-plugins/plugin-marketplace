namespace DidLogic.Requests.NumbersInventory;

/// <summary>
/// The inputs of the NumbersCountriesLocationsIndex operation.
/// </summary>
public sealed record NumbersCountriesLocationsIndexRequest
{
    /// <summary>
    /// Country id from numbers_countries_index
    /// </summary>
    public required int CountryId { get; init; }

    /// <summary>
    /// Number prefix to search for
    /// </summary>
    public required int Prefix { get; init; }

    /// <summary>
    /// Filter locations by SMS capability
    /// </summary>
    public string? SmsEnabled { get; init; }
}
