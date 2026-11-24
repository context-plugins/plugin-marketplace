using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// FeedbackContext captures the intent of the submitted feedback.
/// </summary>
public record GoogleCloudApigeeV1SecurityFeedbackFeedbackContext
{
    /// <summary>
    /// Required. The attribute the user is providing feedback about.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attribute")]
    public AttributeEnum? Attribute { get; init; }

    /// <summary>
    /// Required. The values of the attribute the user is providing feedback about.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<string>? Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
