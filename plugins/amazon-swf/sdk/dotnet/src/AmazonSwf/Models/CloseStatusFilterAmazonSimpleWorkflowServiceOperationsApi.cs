using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record CloseStatusFilterAmazonSimpleWorkflowServiceOperationsApi
{
    /// <summary>
    /// The close status that must match the close status of an execution for it to meet the criteria of this filter.
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusAmazonSimpleWorkflowServiceOperationsApi Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
