using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Fields to change on a service account, as a JSON Merge Patch document.
/// </summary>
public record UpdateServiceAccountRequest
{
    /// <summary>
    /// New name, unique among the customer's service accounts. Leading or trailing whitespace returns <c>400</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// New free-text description. <c>null</c> leaves it unchanged; an explicit empty string clears it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Replaces the whole permission list. An unknown name returns <c>422</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("permissions")]
    public IReadOnlyList<string>? Permissions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
