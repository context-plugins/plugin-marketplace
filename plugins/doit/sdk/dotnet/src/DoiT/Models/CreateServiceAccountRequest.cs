using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Fields of a new service account.
/// </summary>
public record CreateServiceAccountRequest
{
    /// <summary>
    /// Name, unique among the customer's service accounts. Leading or trailing whitespace returns <c>400</c>.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(100, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// Free-text description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Platform permission names in camelCase, for example <c>cloudAnalyticsReadOnly</c>. An unknown name returns <c>422</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("permissions")]
    public IReadOnlyList<string>? Permissions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
