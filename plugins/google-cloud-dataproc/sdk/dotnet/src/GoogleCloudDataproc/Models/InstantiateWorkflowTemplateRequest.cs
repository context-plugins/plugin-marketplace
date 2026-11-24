using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A request to instantiate a workflow template.
/// </summary>
public record InstantiateWorkflowTemplateRequest
{
    /// <summary>
    /// Optional. The version of workflow template to instantiate. If specified, the workflow will be instantiated only if the current version of the workflow template has the supplied version.This option cannot be used to instantiate a previous version of workflow template.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public int? Version { get; init; }

    /// <summary>
    /// Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestId")]
    public string? RequestId { get; init; }

    /// <summary>
    /// Optional. Map from parameter names to values that should be used for those parameters. Values may not exceed 1000 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parameters")]
    public IReadOnlyDictionary<string, string>? Parameters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
