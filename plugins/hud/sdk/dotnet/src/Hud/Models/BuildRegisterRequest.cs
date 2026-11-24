using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// Record an uploaded build context as a build of an environment without building it.
/// <para>
/// With <c>external_id</c> the environment is the team's environment imported under
/// that id, created on first use and named <c>name</c>, suffixed when the name is
/// taken.
/// </para>
/// </summary>
public record BuildRegisterRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registry_id")]
    public RegistryId? RegistryId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public Name? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project_id")]
    public ProjectId? ProjectId { get; init; }

    [JsonPropertyName("build_id")]
    public required Guid BuildId { get; init; }

    /// <summary>
    /// Identity of the environment in the system it is imported from, as <c>&lt;system&gt;:&lt;id&gt;</c>, e.g. <c>harbor:hello-world</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    public ExternalId? ExternalId { get; init; }

    /// <summary>
    /// Content hash of the uploaded source; registering a digest the environment already has returns that build and discards the upload
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_digest")]
    public ContentDigest1? ContentDigest { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
