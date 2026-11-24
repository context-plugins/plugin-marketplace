using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record ProjectSaveAsTemplateRequest
{
    /// <summary>
    /// The name of the new project template.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Sets the team of the new project template. If the project exists in an organization, specify team and not workspace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("team")]
    public string? Team { get; init; }

    /// <summary>
    /// Sets the workspace of the new project template. Only specify workspace if the project exists in a workspace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspace")]
    public string? Workspace { get; init; }

    /// <summary>
    /// Sets the project template to public to its team.
    /// </summary>
    [JsonPropertyName("public")]
    public required bool Public { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
