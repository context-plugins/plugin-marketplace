using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

public record CommitstatusProperties
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public LinksBitbucketCommitStatusesApi? Links { get; init; }

    /// <summary>
    /// An identifier for the status that's unique to
    ///         its type (current "build" is the only supported type) and the vendor,
    ///         e.g. BB-DEPLOY
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// The name of the ref that pointed to this commit at the time the status
    /// object was created. Note that this the ref may since have moved off of
    /// the commit. This optional field can be useful for build systems whose
    /// build triggers and configuration are branch-dependent (e.g. a Pipeline
    /// build).
    /// It is legitimate for this field to not be set, or even apply (e.g. a
    /// static linting job).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refname")]
    public string? Refname { get; init; }

    /// <summary>
    /// A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. Accepts context variables <c>repository</c> and <c>commit</c> that Bitbucket will evaluate at runtime whenever at runtime. For example, one could use https://foo.com/builds/{repository.full_name} which Bitbucket will turn into https://foo.com/builds/foo/bar at render time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// Provides some indication of the status of this commit
    /// </summary>
    [JsonPropertyName("state")]
    public required StateBitbucketCommitStatusesApi State { get; init; }

    /// <summary>
    /// An identifier for the build itself, e.g. BB-DEPLOY-1
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// A description of the build (e.g. "Unit tests in Bamboo")
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_on")]
    public DateTimeOffset? CreatedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_on")]
    public DateTimeOffset? UpdatedOn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
