using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record DateVariableCompact
{
    /// <summary>
    /// Globally unique identifier of the date field in the project template. A value of <c>1</c> refers to the project start date, while <c>2</c> refers to the project due date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gid")]
    public string? Gid { get; init; }

    /// <summary>
    /// The name of the date variable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The description of what the date variable is used for when instantiating a project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
