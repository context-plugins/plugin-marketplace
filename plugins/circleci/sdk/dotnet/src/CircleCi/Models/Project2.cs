using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

public record Project2
{
    /// <summary>
    /// The project slug
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public string? Slug { get; init; }

    /// <summary>
    /// The project name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The unique identifier of the project
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// The name of the organization
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organization_name")]
    public string? OrganizationName { get; init; }

    /// <summary>
    /// The slug of the organization
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organization_slug")]
    public string? OrganizationSlug { get; init; }

    /// <summary>
    /// The ID of the organization
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organization_id")]
    public Guid? OrganizationId { get; init; }

    /// <summary>
    /// Version control system information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vcs_info")]
    public VcsInfo? VcsInfo { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
