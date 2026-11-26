using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;

namespace Justtrack.Models;

public record App
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public AppVersion? Version { get; init; }

    /// <summary>
    /// The store id of the app
    /// </summary>
    [JsonPropertyName("storeId")]
    [StringLength(255, MinimumLength = 1)]
    public required string StoreId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
