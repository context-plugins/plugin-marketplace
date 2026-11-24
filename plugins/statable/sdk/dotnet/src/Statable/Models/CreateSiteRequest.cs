using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record CreateSiteRequest
{
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// IANA zone. Omitted = the server default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timezone")]
    public string? Timezone { get; init; }

    /// <summary>
    /// Request a hobby site. The domain must match a configured hobby suffix.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hobby")]
    public bool? Hobby { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
