using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record ListMonitoredResourcesFilters
{
    /// <summary>
    /// The permission status of a resource.
    /// </summary>
    [JsonPropertyName("ResourcePermission")]
    public required ResourcePermission ResourcePermission { get; init; }

    /// <summary>
    /// The type of resource that you wish to retrieve, such as log groups.
    /// </summary>
    [JsonPropertyName("ResourceTypeFilters")]
    public required IReadOnlyList<ResourceTypeFilter> ResourceTypeFilters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
