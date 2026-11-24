using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

/// <summary>
/// The repository these rules are kept in. Marks the version as managed in Git
/// </summary>
public record SourceDeliverdDevPoliciesApi
{
    /// <summary>
    /// owner/name, or the repository's URL
    /// </summary>
    [JsonPropertyName("repository")]
    [StringLength(200, MinimumLength = 1)]
    public required string Repository { get; init; }

    /// <summary>
    /// The commit the file was read at
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commit")]
    [MaxLength(64)]
    public string? Commit { get; init; }

    /// <summary>
    /// The policy file's path in the repository
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("path")]
    [MaxLength(240)]
    public string? Path { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
