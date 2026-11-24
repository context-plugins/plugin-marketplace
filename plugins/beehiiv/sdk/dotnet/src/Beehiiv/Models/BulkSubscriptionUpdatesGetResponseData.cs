using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record BulkSubscriptionUpdatesGetResponseData
{
    /// <summary>
    /// The ID of the update object
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The type of update (status or bulk)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public BulkSubscriptionUpdatesListResponseDataItemType? Type { get; init; }

    /// <summary>
    /// The parameters passed in for the update
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("params")]
    public string? Params { get; init; }

    /// <summary>
    /// The status of the update
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public BulkSubscriptionUpdatesGetResponseDataStatus? Status { get; init; }

    /// <summary>
    /// The publication ID associated with this update
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publication_id")]
    public string? PublicationId { get; init; }

    /// <summary>
    /// If the job as a whole fails, this will detail the errors encountered
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure_reason")]
    public string? FailureReason { get; init; }

    /// <summary>
    /// The timestamp of the job's completion
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed")]
    public int? Completed { get; init; }

    /// <summary>
    /// The timestamp of the job's creation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created")]
    public int? Created { get; init; }

    /// <summary>
    /// The timestamp of the job's update
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated")]
    public int? Updated { get; init; }

    /// <summary>
    /// An array of errors encountered for individual updates within the job
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error_log")]
    public IReadOnlyList<string>? ErrorLog { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
