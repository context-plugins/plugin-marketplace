using Cloro.Models.Enums;

namespace Cloro.Requests.Countries;

/// <summary>
/// The inputs of the GetCountries operation.
/// </summary>
public sealed record GetCountriesRequest
{
    /// <summary>
    /// Filter countries available for a specific model. Omit to return all supported countries.
    /// </summary>
    public Model? Model { get; init; }
}
