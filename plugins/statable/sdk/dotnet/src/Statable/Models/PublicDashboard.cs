using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record PublicDashboard
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("site_id")]
    public long? SiteId { get; init; }

    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
