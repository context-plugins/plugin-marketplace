using System.Text.Json.Serialization;
using CallNode.Core.Models;

namespace CallNode.Models;

public record Country
{
    /// <summary>
    /// Opaque token. Pass back verbatim; do not persist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryId")]
    public string? CountryId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("countryName")]
    public string? CountryName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isUS")]
    public bool? IsUs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
