using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// The user facing ID for any created lists or audiences in the sync destination
/// </summary>
public record ExternalSegment
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
