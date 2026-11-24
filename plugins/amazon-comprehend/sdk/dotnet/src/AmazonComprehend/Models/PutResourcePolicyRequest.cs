using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record PutResourcePolicyRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the custom model to attach the policy to.
    /// </summary>
    [JsonPropertyName("ResourceArn")]
    public required string ResourceArn { get; init; }

    /// <summary>
    /// The JSON resource-based policy to attach to your custom model. Provide your JSON as a UTF-8 encoded string without line breaks. To provide valid JSON for your policy, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy: "{\"attribute\": \"value\", \"attribute\": [\"value\"]}" To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values: '{"attribute": "value", "attribute": ["value"]}'
    /// </summary>
    [JsonPropertyName("ResourcePolicy")]
    public required string ResourcePolicy { get; init; }

    /// <summary>
    /// The revision ID that Amazon Comprehend assigned to the policy that you are updating. If you are creating a new policy that has no prior version, don't use this parameter. Amazon Comprehend creates the revision ID for you.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PolicyRevisionId")]
    public string? PolicyRevisionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
