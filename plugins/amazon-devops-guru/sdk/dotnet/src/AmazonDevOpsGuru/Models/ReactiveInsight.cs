using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Models.Enums;

namespace AmazonDevOpsGuru.Models;

public record ReactiveInsight
{
    /// <summary>
    /// The ID of a reactive insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public string? Id { get; init; }

    /// <summary>
    /// The name of a reactive insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Name")]
    public string? Name { get; init; }

    /// <summary>
    /// The severity of the insight. For more information, see Understanding insight severities in the Amazon DevOps Guru User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Severity")]
    public SeverityAmazonDevOpsGuruInsightsApi? Severity { get; init; }

    /// <summary>
    /// The status of a reactive insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status1AmazonDevOpsGuruInsightsApi? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InsightTimeRange")]
    public InsightTimeRange? InsightTimeRange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResourceCollection")]
    public ResourceCollection? ResourceCollection { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services System Manager OpsItem created for this insight. You must enable the creation of OpstItems insights before they are created for each insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SsmOpsItemId")]
    public string? SsmOpsItemId { get; init; }

    /// <summary>
    /// Describes the reactive insight.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
