using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

public record DomainSchema
{
    /// <summary>
    /// The unique identifier of the domain.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The domain name.
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// Whether the domain is verified.
    /// </summary>
    [JsonPropertyName("verified")]
    public bool Verified { get; init; } = false;

    /// <summary>
    /// Whether the domain is the primary domain for the project.
    /// </summary>
    [JsonPropertyName("primary")]
    public bool Primary { get; init; } = false;

    /// <summary>
    /// Whether the domain is archived.
    /// </summary>
    [JsonPropertyName("archived")]
    public bool Archived { get; init; } = false;

    /// <summary>
    /// The target URL to redirect to when accessing the domain root.
    /// </summary>
    [JsonPropertyName("target")]
    public required string? Target { get; init; }

    /// <summary>
    /// The behavior type for the domain root redirect.
    /// </summary>
    [JsonPropertyName("type")]
    public TypeEnum Type { get; init; } = TypeEnum.Redirect;

    /// <summary>
    /// Provide context to your teammates in the link creation modal by showing them an example of a link to be shortened.
    /// </summary>
    [JsonPropertyName("placeholder")]
    public string Placeholder { get; init; } = "https://codeqr.io/help/article/what-is-codeqr";

    /// <summary>
    /// The URL to redirect to when a link under this domain has expired.
    /// </summary>
    [JsonPropertyName("expiredUrl")]
    public required string? ExpiredUrl { get; init; }

    /// <summary>
    /// The date the domain was created.
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// The date the domain was last updated.
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
