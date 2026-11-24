using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

public record ValueUiPathOrchestratorMachinesApi
{
    /// <summary>
    /// Unique machine identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public long? Id { get; init; }

    /// <summary>
    /// Display name or hostname of the machine
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Name")]
    public string? Name { get; init; }

    /// <summary>
    /// Whether this is a physical machine or a cloud robot template
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public TypeUiPathOrchestratorMachinesApi? Type { get; init; }

    /// <summary>
    /// License key used by the robot installed on this machine
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LicenseKey")]
    public string? LicenseKey { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
