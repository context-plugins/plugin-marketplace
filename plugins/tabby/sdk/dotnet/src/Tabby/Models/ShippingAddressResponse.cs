using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record ShippingAddressResponse
{
    /// <summary>
    /// Name of city, municipality, or village.
    /// </summary>
    [JsonPropertyName("city")]
    public required string? City { get; init; }

    /// <summary>
    /// Building name, apartment number.
    /// </summary>
    [JsonPropertyName("address")]
    public required string? Address { get; init; }

    /// <summary>
    /// Postal code.
    /// </summary>
    [JsonPropertyName("zip")]
    public required string? Zip { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
