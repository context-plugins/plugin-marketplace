using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetCountryAggregatesPlayAggregatesCountriesGet operation.
/// </summary>
public sealed record GetCountryAggregatesPlayAggregatesCountriesGetRequest
{
    /// <summary>
    /// Restrict to developers with this dominant category type
    /// </summary>
    public TypeEnum? CategoryType { get; init; }
}
