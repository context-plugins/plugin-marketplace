using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record ProjectTemplateInstantiateProjectRequest
{
    /// <summary>
    /// The name of the new project.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// *Conditional*. Sets the team of the new project. If the project template exists in an _organization_, you must specify a value for <c>team</c> and not <c>workspace</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("team")]
    public string? Team { get; init; }

    /// <summary>
    /// *Conditional*. Sets the workspace of the new project. If the project template exists in a _workspace_, you must specify a value for <c>workspace</c> and not <c>team</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspace")]
    public string? Workspace { get; init; }

    /// <summary>
    /// Sets the project to public to its team.
    /// </summary>
    [JsonPropertyName("public")]
    public required bool Public { get; init; }

    /// <summary>
    /// *Optional*. If set to <c>true</c>, the endpoint returns an "Unprocessable Entity" error if you fail to provide a calendar date value for any date variable. If set to <c>false</c>, a default date is used for each unfulfilled date variable (e.g., the current date is used as the Start Date of a project).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_strict")]
    public bool? IsStrict { get; init; }

    /// <summary>
    /// Array of mappings of date variables to calendar dates.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requested_dates")]
    public IReadOnlyList<DateVariableRequest>? RequestedDates { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
