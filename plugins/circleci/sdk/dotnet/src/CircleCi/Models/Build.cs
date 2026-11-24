using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Models;
using CircleCi.Core.Validation;
using CircleCi.Core.Validation.Attributes;
using CircleCi.Models.Enums;

namespace CircleCi.Models;

public record Build
{
    /// <summary>
    /// The VCS URL
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vcs_url")]
    [Format(FormatKind.Uri)]
    public string? VcsUrl { get; init; }

    /// <summary>
    /// URL to view the build in CircleCI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("build_url")]
    [Format(FormatKind.Uri)]
    public string? BuildUrl { get; init; }

    /// <summary>
    /// The build number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("build_num")]
    public int? BuildNum { get; init; }

    /// <summary>
    /// The branch that was built
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branch")]
    public string? Branch { get; init; }

    /// <summary>
    /// The VCS revision (commit SHA)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vcs_revision")]
    public string? VcsRevision { get; init; }

    /// <summary>
    /// Name of the committer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("committer_name")]
    public string? CommitterName { get; init; }

    /// <summary>
    /// Email of the committer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("committer_email")]
    [Format(FormatKind.Email)]
    public string? CommitterEmail { get; init; }

    /// <summary>
    /// The commit message subject
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject")]
    public string? Subject { get; init; }

    /// <summary>
    /// The commit message body
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("body")]
    public string? Body { get; init; }

    /// <summary>
    /// Why the build was triggered
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("why")]
    public string? Why { get; init; }

    /// <summary>
    /// The build status
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status? Status { get; init; }

    /// <summary>
    /// The build outcome
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outcome")]
    public Outcome? Outcome { get; init; }

    /// <summary>
    /// When the build started
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_time")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// When the build stopped
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stop_time")]
    public DateTimeOffset? StopTime { get; init; }

    /// <summary>
    /// Total build time in milliseconds
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("build_time_millis")]
    public int? BuildTimeMillis { get; init; }

    /// <summary>
    /// When the build was queued
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queued_at")]
    public DateTimeOffset? QueuedAt { get; init; }

    /// <summary>
    /// The build lifecycle phase
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lifecycle")]
    public Lifecycle? Lifecycle { get; init; }

    /// <summary>
    /// The organization or username
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("username")]
    public string? Username { get; init; }

    /// <summary>
    /// The repository name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reponame")]
    public string? Reponame { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
