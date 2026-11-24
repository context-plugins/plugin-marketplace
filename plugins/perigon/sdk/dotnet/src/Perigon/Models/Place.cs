using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Structured geographic places extracted from the article.
/// </summary>
public record Place
{
    /// <summary>
    /// OpenStreetMap identifier for the place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("osmId")]
    public string? OsmId { get; init; }

    /// <summary>
    /// Road associated with the place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("road")]
    public string? Road { get; init; }

    /// <summary>
    /// Quarter associated with the place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quarter")]
    public string? Quarter { get; init; }

    /// <summary>
    /// Suburb associated with the place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("suburb")]
    public string? Suburb { get; init; }

    /// <summary>
    /// City associated with the place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    public string? City { get; init; }

    /// <summary>
    /// Town associated with the place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("town")]
    public string? Town { get; init; }

    /// <summary>
    /// County associated with the place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("county")]
    public string? County { get; init; }

    /// <summary>
    /// State district associated with the place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stateDistrict")]
    public string? StateDistrict { get; init; }

    /// <summary>
    /// State or region associated with the place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// Postal code associated with the place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postcode")]
    public string? Postcode { get; init; }

    /// <summary>
    /// Country associated with the place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// Two-character country code for the place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryCode")]
    public string? CountryCode { get; init; }

    /// <summary>
    /// Named amenity associated with the place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amenity")]
    public string? Amenity { get; init; }

    /// <summary>
    /// Neighborhood associated with the place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("neighbourhood")]
    public string? Neighbourhood { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coordinates")]
    public Coordinate? Coordinates { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
