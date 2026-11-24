using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Request body for creating or updating an insight via the batch endpoint. Includes resource results.
/// </summary>
public record InsightRequest
{
    /// <summary>
    /// A unique key for this insight within the source.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// The display title of the insight.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// A brief summary of the insight.
    /// </summary>
    [JsonPropertyName("shortDescription")]
    public required string ShortDescription { get; init; }

    /// <summary>
    /// A detailed description of the insight in MDX format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detailedDescriptionMdx")]
    public string? DetailedDescriptionMdx { get; init; }

    /// <summary>
    /// The cloud provider associated with the resource.
    /// </summary>
    [JsonPropertyName("cloudProvider")]
    public required string CloudProvider { get; init; }

    /// <summary>
    /// One or more categories this insight belongs to.
    /// </summary>
    [JsonPropertyName("categories")]
    [MinLength(1)]
    [UniqueItems]
    public required IReadOnlyList<CreateCategory> Categories { get; init; }

    /// <summary>
    /// URL to an external report related to this insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reportUrl")]
    public string? ReportUrl { get; init; }

    /// <summary>
    /// ID of a CloudFlow template that can automate the remediation of this insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudFlowTemplateId")]
    public string? CloudFlowTemplateId { get; init; }

    /// <summary>
    /// A description of why this insight is considered an easy win.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("easyWinDescription")]
    public string? EasyWinDescription { get; init; }

    /// <summary>
    /// A list of resource-level results for creating or updating an insight.
    /// </summary>
    [JsonPropertyName("resourceResults")]
    public required IReadOnlyList<ResourceResultRequest> ResourceResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
