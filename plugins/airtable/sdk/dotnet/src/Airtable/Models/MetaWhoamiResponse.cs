using System.Collections.Generic;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record MetaWhoamiResponse
{
    /// <summary>
    /// The ID of the authenticated user or service account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The list of scopes authorized for this token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scopes")]
    public IReadOnlyList<string>? Scopes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
