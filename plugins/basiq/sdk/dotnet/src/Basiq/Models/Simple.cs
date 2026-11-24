using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record Simple
{
    /// <summary>
    /// Name of the individual or business formatted for inclusion in an address used for physical mail.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mailingName")]
    public string? MailingName { get; init; }

    /// <summary>
    /// First line of the standard address object.
    /// </summary>
    [JsonPropertyName("addressLine1")]
    public required string AddressLine1 { get; init; }

    /// <summary>
    /// Second line of the standard address object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressLine2")]
    public string? AddressLine2 { get; init; }

    /// <summary>
    /// Third line of the standard address object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressLine3")]
    public string? AddressLine3 { get; init; }

    /// <summary>
    /// Mandatory for Australian addresses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postcode")]
    public string? Postcode { get; init; }

    /// <summary>
    /// Name of the city or locality.
    /// </summary>
    [JsonPropertyName("city")]
    public required string City { get; init; }

    /// <summary>
    /// Free text if the country is not Australia. If country is Australia then must be one of the values defined by the State Type Abbreviation in the PAF file format. NSW, QLD, VIC, NT, WA, SA, TAS, ACT.
    /// </summary>
    [JsonPropertyName("state")]
    public required string State { get; init; }

    /// <summary>
    /// A valid ISO 3166 Alpha-3 country code. Australia (AUS) is assumed if country is not present.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// Australian address formatted according to the file format defined by the PAF file format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paf")]
    public Paf? Paf { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
