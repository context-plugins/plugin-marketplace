using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.AppStore;

/// <summary>
/// The inputs of the GetCountryAggregatesIosAggregatesCountriesGet operation.
/// </summary>
public sealed record GetCountryAggregatesIosAggregatesCountriesGetRequest
{
    /// <summary>
    /// Restrict to developers with this dominant category type
    /// </summary>
    public TypeEnum? CategoryType { get; init; }
}
