using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record FulfillmentUpdatesSpecification
{
    /// <summary>
    /// Determines whether fulfillment updates are sent to the user. When this field is true, updates are sent. If the active field is set to true, the startResponse, updateResponse, and timeoutInSeconds fields are required.
    /// </summary>
    [JsonPropertyName("active")]
    public required bool Active { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startResponse")]
    public FulfillmentStartResponseSpecification? StartResponse { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateResponse")]
    public FulfillmentUpdateResponseSpecification? UpdateResponse { get; init; }

    /// <summary>
    /// The length of time that the fulfillment Lambda function should run before it times out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeoutInSeconds")]
    public int? TimeoutInSeconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
