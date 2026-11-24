using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record LocationResponse
{
    /// <summary>
    /// The country where the person is located.
    /// </summary>
    [JsonPropertyName("country")]
    public required string Country { get; init; }

    /// <summary>
    /// The ISO 3166-1 alpha-2 country code of the person.
    /// </summary>
    [JsonPropertyName("countryIso2")]
    public required string CountryIso2 { get; init; }

    /// <summary>
    /// The ISO 3166-1 alpha-2 country code of the person.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country_iso2")]
    public string? CountryIso22 { get; init; }

    /// <summary>
    /// The continent where the person is located.
    /// </summary>
    [JsonPropertyName("continent")]
    public required string Continent { get; init; }

    /// <summary>
    /// The detailed address.
    /// </summary>
    [JsonPropertyName("rawLocation")]
    public required string RawLocation { get; init; }

    /// <summary>
    /// The region where the person is located.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    public string? Region { get; init; }

    /// <summary>
    /// The city where the person is located.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    public string? City { get; init; }

    /// <summary>
    /// The ID of the city where the person is located.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cityId")]
    public double? CityId { get; init; }

    /// <summary>
    /// The state where the person is located.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// The state code of the person.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateCode")]
    public string? StateCode { get; init; }

    /// <summary>
    /// The state code of the person.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state_code")]
    public string? StateCode2 { get; init; }

    /// <summary>
    /// The street where the person is located.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("street")]
    public string? Street { get; init; }

    /// <summary>
    /// The coordinates of the person.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locationCoordinates")]
    public IReadOnlyList<double>? LocationCoordinates { get; init; }

    /// <summary>
    /// Indicates whether the person is in the EU.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isEuContact")]
    public bool? IsEuContact { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
