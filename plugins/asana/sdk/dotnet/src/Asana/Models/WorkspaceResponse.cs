using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record WorkspaceResponse
{
    /// <summary>
    /// Globally unique identifier of the resource, as a string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gid")]
    public string? Gid { get; init; }

    /// <summary>
    /// The base type of this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_type")]
    public string? ResourceType { get; init; }

    /// <summary>
    /// The name of the workspace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The email domains that are associated with this workspace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email_domains")]
    public IReadOnlyList<string>? EmailDomains { get; init; }

    /// <summary>
    /// Whether the workspace is an *organization*.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_organization")]
    public bool? IsOrganization { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
