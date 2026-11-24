using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lili.Core.Models;

namespace Lili.Models;

/// <summary>
/// The registered business address (the address the business provided to the state of formation to accept legal process). Can be outside of the US, in case only a registered agent address is available. Used as the billing address and presented on bank statements and invoices.
/// </summary>
public record AddressData3
{
    /// <summary>
    /// Line 1 of the address
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line1")]
    public string? Line1 { get; init; }

    /// <summary>
    /// Line 2 of the address
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line2")]
    public string? Line2 { get; init; }

    /// <summary>
    /// City
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    [StringLength(30, MinimumLength = 1)]
    public string? City { get; init; }

    /// <summary>
    /// State 2 letter code (ISO 3166 format)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    /// <summary>
    /// Postal code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postalCode")]
    public string? PostalCode { get; init; }

    /// <summary>
    /// Country 2 letter code (ISO 3166 format)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
