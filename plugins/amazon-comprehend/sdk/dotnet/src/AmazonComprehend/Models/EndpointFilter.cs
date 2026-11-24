using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record EndpointFilter
{
    /// <summary>
    /// The Amazon Resource Number (ARN) of the model to which the endpoint is attached.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModelArn")]
    public string? ModelArn { get; init; }

    /// <summary>
    /// Specifies the status of the endpoint being returned. Possible values are: Creating, Ready, Updating, Deleting, Failed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status8? Status { get; init; }

    /// <summary>
    /// Specifies a date before which the returned endpoint or endpoints were created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTimeBefore")]
    public DateTimeOffset? CreationTimeBefore { get; init; }

    /// <summary>
    /// Specifies a date after which the returned endpoint or endpoints were created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTimeAfter")]
    public DateTimeOffset? CreationTimeAfter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
