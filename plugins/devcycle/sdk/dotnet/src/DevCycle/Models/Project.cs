using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record Project
{
    /// <summary>
    /// A unique Project ID
    /// </summary>
    [JsonPropertyName("_id")]
    public required string Id { get; init; }

    /// <summary>
    /// ID of the Organization owning the Project
    /// </summary>
    [JsonPropertyName("_organization")]
    public required string Organization { get; init; }

    /// <summary>
    /// ID of the User who created the project
    /// </summary>
    [JsonPropertyName("_createdBy")]
    public required string CreatedBy { get; init; }

    /// <summary>
    /// Project name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// A unique key to identify the Project
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// A description of the Project
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Project display color, used to highlight different projects on the dashboard.
    /// Must use Hex color code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    public string? Color { get; init; }

    [JsonPropertyName("settings")]
    public required ProjectSettings Settings { get; init; }

    /// <summary>
    /// The date the Project was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The date the Project was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// Boolean tracking whether this project has a jira integration set up
    /// </summary>
    [JsonPropertyName("hasJiraIntegration")]
    public required bool HasJiraIntegration { get; init; }

    /// <summary>
    /// Describe if a project has ever received code usages for any variable
    /// </summary>
    [JsonPropertyName("hasReceivedCodeUsages")]
    public required bool HasReceivedCodeUsages { get; init; }

    /// <summary>
    /// Boolean indicating whether a user config has been fetched for this project
    /// </summary>
    [JsonPropertyName("hasUserConfigFetch")]
    public required bool HasUserConfigFetch { get; init; }

    /// <summary>
    /// Jira project base url, if the integration is defined
    /// </summary>
    [JsonPropertyName("jiraBaseUrl")]
    public required string JiraBaseUrl { get; init; }

    /// <summary>
    /// Controls whether the feature is editable for a given user
    /// </summary>
    [JsonPropertyName("readonly")]
    public required bool Readonly { get; init; }

    /// <summary>
    /// Edge Config Connections for the project
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vercelEdgeConfigConnections")]
    public IReadOnlyList<VercelEdgeConfigConnection>? VercelEdgeConfigConnections { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
