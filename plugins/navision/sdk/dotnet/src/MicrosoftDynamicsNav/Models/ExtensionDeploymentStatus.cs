using System;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models.Enums;

namespace MicrosoftDynamicsNav.Models;

public record ExtensionDeploymentStatus
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// Extension name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Extension publisher
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publisher")]
    public string? Publisher { get; init; }

    /// <summary>
    /// Type of deployment operation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationType")]
    public string? OperationType { get; init; }

    /// <summary>
    /// Deployment status
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusBusinessCentralAutomationApiV20ExtensionDeployment? Status { get; init; }

    /// <summary>
    /// Extension version
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appVersion")]
    public string? AppVersion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startedOn")]
    public DateTimeOffset? StartedOn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
