using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record FulfillmentCodeHookSettings
{
    /// <summary>
    /// Indicates whether a Lambda function should be invoked to fulfill a specific intent.
    /// </summary>
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postFulfillmentStatusSpecification")]
    public PostFulfillmentStatusSpecification? PostFulfillmentStatusSpecification { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fulfillmentUpdatesSpecification")]
    public FulfillmentUpdatesSpecification? FulfillmentUpdatesSpecification { get; init; }

    /// <summary>
    /// Determines whether the fulfillment code hook is used. When active is false, the code hook doesn't run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active")]
    public bool? Active { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
