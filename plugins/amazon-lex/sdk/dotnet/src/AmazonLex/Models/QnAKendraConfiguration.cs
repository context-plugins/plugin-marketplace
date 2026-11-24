using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record QnAKendraConfiguration
{
    /// <summary>
    /// The ARN of the Amazon Kendra index to use.
    /// </summary>
    [JsonPropertyName("kendraIndex")]
    public required string KendraIndex { get; init; }

    /// <summary>
    /// Specifies whether to enable an Amazon Kendra filter string or not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryFilterStringEnabled")]
    public bool? QueryFilterStringEnabled { get; init; }

    /// <summary>
    /// Contains the Amazon Kendra filter string to use if enabled. For more information on the Amazon Kendra search filter JSON format, see Using document attributes to filter search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryFilterString")]
    public string? QueryFilterString { get; init; }

    /// <summary>
    /// Specifies whether to return an exact response from the Amazon Kendra index or to let the Amazon Bedrock model you select generate a response based on the results. To use this feature, you must first add FAQ questions to your index by following the steps at Adding frequently asked questions (FAQs) to an index.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exactResponse")]
    public bool? ExactResponse { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
