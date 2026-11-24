using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Australian address formatted according to the file format defined by the PAF file format.
/// </summary>
public record Paf
{
    /// <summary>
    /// Unique identifier for an address as defined by Australia Post. Also known as Delivery Point Identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dpid")]
    public string? Dpid { get; init; }

    /// <summary>
    /// Thoroughfare number for a property (first number in a property ranged address).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thoroughfareNumber1")]
    public int? ThoroughfareNumber1 { get; init; }

    /// <summary>
    /// Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thoroughfareNumber1Suffix")]
    public string? ThoroughfareNumber1Suffix { get; init; }

    /// <summary>
    /// Second thoroughfare number (only used if the property has a ranged address eg 23-25).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thoroughfareNumber2")]
    public int? ThoroughfareNumber2 { get; init; }

    /// <summary>
    /// Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thoroughfareNumber2Suffix")]
    public string? ThoroughfareNumber2Suffix { get; init; }

    /// <summary>
    /// Type of flat or unit for the address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flatUnitType")]
    public string? FlatUnitType { get; init; }

    /// <summary>
    /// Unit number (including suffix, if applicable).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("flatUnitNumber")]
    public string? FlatUnitNumber { get; init; }

    /// <summary>
    /// Type of floor or level for the address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("floorLevelType")]
    public string? FloorLevelType { get; init; }

    /// <summary>
    /// Floor or level number (including alpha characters).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("floorLevelNumber")]
    public string? FloorLevelNumber { get; init; }

    /// <summary>
    /// Allotment number for the address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lotNumber")]
    public string? LotNumber { get; init; }

    /// <summary>
    /// Building/Property name 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildingName1")]
    public string? BuildingName1 { get; init; }

    /// <summary>
    /// Building/Property name 2.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buildingName2")]
    public string? BuildingName2 { get; init; }

    /// <summary>
    /// The name of the street.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streetName")]
    public string? StreetName { get; init; }

    /// <summary>
    /// The street type. Valid enumeration defined by Australia Post PAF code file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streetType")]
    public string? StreetType { get; init; }

    /// <summary>
    /// The street type suffix. Valid enumeration defined by Australia Post PAF code file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streetSuffix")]
    public string? StreetSuffix { get; init; }

    /// <summary>
    /// Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postalDeliveryType")]
    public string? PostalDeliveryType { get; init; }

    /// <summary>
    /// Postal delivery number if the address is a postal delivery type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postalDeliveryNumber")]
    public int? PostalDeliveryNumber { get; init; }

    /// <summary>
    /// Postal delivery number prefix related to the postal delivery number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postalDeliveryNumberPrefix")]
    public string? PostalDeliveryNumberPrefix { get; init; }

    /// <summary>
    /// Postal delivery number suffix related to the postal delivery number.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postalDeliveryNumberSuffix")]
    public string? PostalDeliveryNumberSuffix { get; init; }

    /// <summary>
    /// Full name of locality.
    /// </summary>
    [JsonPropertyName("localityName")]
    public required string LocalityName { get; init; }

    /// <summary>
    /// Postcode for the locality.
    /// </summary>
    [JsonPropertyName("postcode")]
    public required string Postcode { get; init; }

    /// <summary>
    /// State in which the address belongs. Valid enumeration defined by Australia Post PAF code file State Type Abbreviation. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT.
    /// </summary>
    [JsonPropertyName("state")]
    public required string State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
