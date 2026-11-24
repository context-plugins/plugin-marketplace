using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record UpdateVariableStatusDto
{
    /// <summary>
    /// Status field indicating whether a variable is actively being used, or is archived.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status1DevCycleManagementVariablesApi Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
