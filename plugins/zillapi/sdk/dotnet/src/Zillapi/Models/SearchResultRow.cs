using System.Text.Json.Serialization;
using Zillapi.Core.Models;

namespace Zillapi.Models;

/// <summary>
/// A single row returned by search/listings endpoints. This is the SEARCH shape — lighter than the full Property detail record and with different field names. To get the full detail record for a row, call GET /v1/properties/{zpid} using its zpid.
/// </summary>
public record SearchResultRow
{
    /// <summary>
    /// Zillow property id, always a string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("zpid")]
    public string? Zpid { get; init; }

    /// <summary>
    /// Zillow result id for the row.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("palsId")]
    public string? PalsId { get; init; }

    /// <summary>
    /// Formatted street address for the row.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public string? Address { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressStreet")]
    public string? AddressStreet { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressCity")]
    public string? AddressCity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressState")]
    public string? AddressState { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressZipcode")]
    public string? AddressZipcode { get; init; }

    /// <summary>
    /// Formatted price string, e.g. "$1,250,000".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("price")]
    public string? Price { get; init; }

    /// <summary>
    /// Numeric price.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unformattedPrice")]
    public double? UnformattedPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("beds")]
    public double? Beds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("baths")]
    public double? Baths { get; init; }

    /// <summary>
    /// Living area in square feet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("area")]
    public double? Area { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("livingArea")]
    public double? LivingArea { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latLong")]
    public LatLong? LatLong { get; init; }

    /// <summary>
    /// e.g. FOR_SALE, FOR_RENT, SOLD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusType")]
    public string? StatusType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusText")]
    public string? StatusText { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("homeType")]
    public string? HomeType { get; init; }

    /// <summary>
    /// Primary thumbnail image URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imgSrc")]
    public string? ImgSrc { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hasImage")]
    public bool? HasImage { get; init; }

    /// <summary>
    /// Relative or absolute Zillow detail URL for the listing.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detailUrl")]
    public string? DetailUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hdpData")]
    public HdpData? HdpData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
