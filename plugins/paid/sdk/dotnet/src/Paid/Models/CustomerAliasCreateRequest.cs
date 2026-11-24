using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomerAliasCreateRequest
{
    /// <summary>
    /// Alternate external identifier that should resolve to this customer.
    /// </summary>
    [JsonPropertyName("alias")]
    public required string Alias { get; init; }

    /// <summary>
    /// Optional display name for this alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional note describing where this alias comes from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
