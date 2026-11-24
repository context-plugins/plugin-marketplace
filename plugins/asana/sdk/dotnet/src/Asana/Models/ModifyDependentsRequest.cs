using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

/// <summary>
/// A set of dependent tasks.
/// </summary>
public record ModifyDependentsRequest
{
    /// <summary>
    /// An array of task gids that are dependents of the given task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dependents")]
    public IReadOnlyList<string>? Dependents { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
