using System.Collections.Generic;
using System.Text.Json.Serialization;
using Jid.Core.Models;

namespace Jid.Models;

public record SearchResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("query")]
    public string? Query { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<Result>? Results { get; init; }

    /// <summary>
    /// Businesses with no Jid file whose own website names them (tier website_declared). Not files and not confirmed by an official register.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("website_declared")]
    public IReadOnlyList<WebsiteDeclared>? WebsiteDeclared { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
