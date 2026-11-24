using System.Text.Json.Serialization;
using Instacart.Core.Models;

namespace Instacart.Models;

/// <summary>
/// Information about the current shopper assigned to the order.
/// </summary>
public record Shopper
{
    /// <summary>
    /// The first name of the shopper.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// A masked phone number for contacting the shopper.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone_number")]
    public string? PhoneNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
