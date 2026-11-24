using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Postal Address File
/// </summary>
public record PafIdentityIdentitiesApi
{
    /// <summary>
    /// Delivery Point Identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dpid")]
    public string? Dpid { get; init; }

    /// <summary>
    /// First Thoroughfare Number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thoroughfareNumber1")]
    public int? ThoroughfareNumber1 { get; init; }

    /// <summary>
    /// First Thoroughfare Number Suffix
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thoroughfareNumber1Suffix")]
    public string? ThoroughfareNumber1Suffix { get; init; }

    /// <summary>
    /// Second Thoroughfare Number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thoroughfareNumber2")]
    public int? ThoroughfareNumber2 { get; init; }

    /// <summary>
    /// Second Thoroughfare Number Suffix
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thoroughfareNumber2Suffix")]
    public string? ThoroughfareNumber2Suffix { get; init; }

    /// <summary>
    /// Flat Unit Type (e.g., Apartment, Unit)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flatUnitType")]
    public string? FlatUnitType { get; init; }

    /// <summary>
    /// Flat Unit Number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flatUnitNumber")]
    public string? FlatUnitNumber { get; init; }

    /// <summary>
    /// Floor Level Type (e.g., Level, Floor)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("floorLevelType")]
    public string? FloorLevelType { get; init; }

    /// <summary>
    /// Floor Level Number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("floorLevelNumber")]
    public string? FloorLevelNumber { get; init; }

    /// <summary>
    /// Lot Number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lotNumber")]
    public string? LotNumber { get; init; }

    /// <summary>
    /// First Building Name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildingName1")]
    public string? BuildingName1 { get; init; }

    /// <summary>
    /// Second Building Name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildingName2")]
    public string? BuildingName2 { get; init; }

    /// <summary>
    /// Street Name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streetName")]
    public string? StreetName { get; init; }

    /// <summary>
    /// Street Type (e.g., St, Rd, Ave)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streetType")]
    public string? StreetType { get; init; }

    /// <summary>
    /// Street Suffix (e.g., NW, SE)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streetSuffix")]
    public string? StreetSuffix { get; init; }

    /// <summary>
    /// Postal Delivery Type (e.g., PO Box, Locked Bag)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postalDeliveryType")]
    public string? PostalDeliveryType { get; init; }

    /// <summary>
    /// Postal Delivery Number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postalDeliveryNumber")]
    public int? PostalDeliveryNumber { get; init; }

    /// <summary>
    /// Postal Delivery Number Prefix
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postalDeliveryNumberPrefix")]
    public string? PostalDeliveryNumberPrefix { get; init; }

    /// <summary>
    /// Locality Name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localityName")]
    public string? LocalityName { get; init; }

    /// <summary>
    /// Postcode
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postcode")]
    public string? Postcode { get; init; }

    /// <summary>
    /// State
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
