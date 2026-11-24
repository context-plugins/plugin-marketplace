using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

/// <summary>
/// Where it landed. Must be where it was authorised to
/// </summary>
public record Destination9
{
    /// <summary>
    /// workspace, report, user, group, email, url, channel, repository, …
    /// </summary>
    [JsonPropertyName("type")]
    [RegularExpression("^[a-z][a-z0-9_]{1,39}$")]
    public required string Type { get; init; }

    /// <summary>
    /// A workspace slug or id, an email address, a URL, a channel id
    /// </summary>
    [JsonPropertyName("id")]
    [StringLength(300, MinimumLength = 1)]
    public required string Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    [MaxLength(200)]
    public string? Label { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
