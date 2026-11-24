using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Postal address of the location that includes human readable information, such as postal delivery and payments addresses. Given a postal address, a postal service can deliver items to a premises, P.O. Box, or other delivery location.
/// </summary>
public record PostalAddress2
{
    /// <summary>
    /// Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("languageCode")]
    public string? LanguageCode { get; init; }

    /// <summary>
    /// Unstructured address lines describing the lower levels of an address. Because values in <c>address_lines</c> do not have type information and may sometimes contain multiple values in a single field (for example, "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country or region of the address. In places where this can vary (for example, Japan), <c>address_language</c> is used to make it explicit (for example, "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). In this way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a <c>region_code</c> with all remaining information placed in the <c>address_lines</c>. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a <c>region_code</c> and <c>address_lines</c> and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressLines")]
    public IReadOnlyList<string>? AddressLines { get; init; }

    /// <summary>
    /// Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (for example, "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (Côte d'Ivoire).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortingCode")]
    public string? SortingCode { get; init; }

    /// <summary>
    /// Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("regionCode")]
    public string? RegionCode { get; init; }

    /// <summary>
    /// Optional. Sublocality of the address. For example, this can be a neighborhood, borough, or district.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sublocality")]
    public string? Sublocality { get; init; }

    /// <summary>
    /// Optional. The name of the organization at the address.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organization")]
    public string? Organization { get; init; }

    /// <summary>
    /// Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. For Spain, this is the province and not the autonomous community (for example, "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. For example, in Switzerland, this should be left unpopulated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("administrativeArea")]
    public string? AdministrativeArea { get; init; }

    /// <summary>
    /// The schema revision of the <c>PostalAddress</c>. This must be set to 0, which is the latest revision. All new revisions <b>must</b> be backward compatible with old revisions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revision")]
    public int? Revision { get; init; }

    /// <summary>
    /// Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (for example, state or zip code validation in the United States).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postalCode")]
    public string? PostalCode { get; init; }

    /// <summary>
    /// Optional. Generally refers to the city or town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave <c>locality</c> empty and use <c>address_lines</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locality")]
    public string? Locality { get; init; }

    /// <summary>
    /// Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recipients")]
    public IReadOnlyList<string>? Recipients { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
