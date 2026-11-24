using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record Group
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("references")]
    public IReadOnlyDictionary<string, string>? References { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("guid")]
    public required string Guid { get; init; }

    [JsonPropertyName("created")]
    public required string Created { get; init; }

    [JsonPropertyName("modified")]
    public required string Modified { get; init; }

    [JsonPropertyName("is_active")]
    public required bool IsActive { get; init; }

    [JsonPropertyName("role")]
    public required string Role { get; init; }

    [JsonPropertyName("organization_guid")]
    public required string OrganizationGuid { get; init; }

    [JsonPropertyName("bsds")]
    public required IReadOnlyList<string> Bsds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
