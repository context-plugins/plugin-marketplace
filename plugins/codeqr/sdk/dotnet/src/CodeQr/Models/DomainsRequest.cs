using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record DomainsRequest
{
    /// <summary>
    /// Name of the domain.
    /// </summary>
    [JsonPropertyName("slug")]
    [MinLength(1)]
    public required string Slug { get; init; }

    /// <summary>
    /// The target URL to redirect to when accessing the domain root.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("target")]
    public string? Target { get; init; }

    /// <summary>
    /// The behavior type for the domain root redirect.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; } = TypeEnum.Redirect;

    /// <summary>
    /// Redirect users to a specific URL when any link under this domain has expired.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiredUrl")]
    public string? ExpiredUrl { get; init; }

    /// <summary>
    /// Whether to archive this domain. <c>false</c> will unarchive a previously archived domain.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; } = false;

    /// <summary>
    /// Provide context to your teammates in the link creation modal by showing them an example of a link to be shortened.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("placeholder")]
    public string? Placeholder { get; init; } = "https://codeqr.io/help/article/what-is-codeqr";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
