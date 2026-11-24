using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record MonitoredResourceIdentifier
{
    /// <summary>
    /// The name of the resource being monitored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MonitoredResourceName")]
    public string? MonitoredResourceName { get; init; }

    /// <summary>
    /// The type of resource being monitored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Type")]
    public string? Type { get; init; }

    /// <summary>
    /// The permission status of a resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourcePermission")]
    public ResourcePermission? ResourcePermission { get; init; }

    /// <summary>
    /// The time at which DevOps Guru last updated this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastUpdated")]
    public DateTimeOffset? LastUpdated { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourceCollection")]
    public ResourceCollection? ResourceCollection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
