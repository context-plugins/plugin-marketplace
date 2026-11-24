using System;
using System.Text.Json.Serialization;
using Bitbucket.Models.AllOf;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

public record PullrequestTask
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public long? Id { get; init; }

    [JsonPropertyName("created_on")]
    public required DateTimeOffset CreatedOn { get; init; }

    [JsonPropertyName("updated_on")]
    public required DateTimeOffset UpdatedOn { get; init; }

    [JsonPropertyName("state")]
    public required State2BitbucketPullrequestsApi State { get; init; }

    [JsonPropertyName("content")]
    public required Content Content { get; init; }

    [JsonPropertyName("creator")]
    public required Account Creator { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pending")]
    public bool? Pending { get; init; }

    /// <summary>
    /// The ISO8601 timestamp for when the task was resolved.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolved_on")]
    public DateTimeOffset? ResolvedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resolved_by")]
    public Account? ResolvedBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public Links5BitbucketPullrequestsApi? Links { get; init; }
}
