using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record OrderTabbyApiReferencePaymentsApi
{
    /// <summary>
    /// Merchant-assigned order or cart ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reference_id")]
    public string? ReferenceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
