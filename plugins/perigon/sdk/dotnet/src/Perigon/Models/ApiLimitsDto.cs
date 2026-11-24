using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Current API usage and limits for the authenticated account, optionally including the status of additional API keys that were requested. Reading this does not count against the account's request quota or rate limit.
/// </summary>
public record ApiLimitsDto
{
    /// <summary>
    /// Name of the account (organization) the API key belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organizationName")]
    public string? OrganizationName { get; init; }

    /// <summary>
    /// Number of billable requests used in the current tracking period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestsUsed")]
    public long? RequestsUsed { get; init; }

    /// <summary>
    /// Maximum number of requests allowed in the current tracking period. Null means the account has no request limit.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestLimit")]
    public long? RequestLimit { get; init; }

    /// <summary>
    /// Maximum number of results allowed per page (page size).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxPageSize")]
    public int? MaxPageSize { get; init; }

    /// <summary>
    /// Maximum number of results that can be paginated through.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paginationLimit")]
    public int? PaginationLimit { get; init; }

    /// <summary>
    /// Number of characters article content is truncated to. Null means content is not truncated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("articleContentTruncation")]
    public int? ArticleContentTruncation { get; init; }

    /// <summary>
    /// Start of the current tracking period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("since")]
    public DateTimeOffset? Since { get; init; }

    /// <summary>
    /// Timestamp of the last billable request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastMadeAt")]
    public DateTimeOffset? LastMadeAt { get; init; }

    /// <summary>
    /// When the request counter resets to zero.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resetAt")]
    public DateTimeOffset? ResetAt { get; init; }

    /// <summary>
    /// Date the API subscription is scheduled to be cancelled. Absent when the subscription is not set to cancel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscriptionCancelAt")]
    public DateTimeOffset? SubscriptionCancelAt { get; init; }

    /// <summary>
    /// Status of each API key supplied via the 'apiKeys' parameter, in the same order as the request. Absent when no keys were supplied.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyStatuses")]
    public IReadOnlyList<ApiKeyStatus>? KeyStatuses { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
