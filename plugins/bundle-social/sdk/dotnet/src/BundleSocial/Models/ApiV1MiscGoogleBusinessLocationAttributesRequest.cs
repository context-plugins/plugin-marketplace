using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record ApiV1MiscGoogleBusinessLocationAttributesRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributeMask")]
    public string? AttributeMask { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<Attribute1>? Attributes { get; init; }
}
