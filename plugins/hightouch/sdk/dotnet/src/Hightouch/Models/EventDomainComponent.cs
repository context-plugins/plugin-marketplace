using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// Reusable schema fragments that can be imported by event schemas.
/// </summary>
public record EventDomainComponent
{
    /// <summary>
    /// The component's id. Omit when creating. On update, a component matches an existing one by id when supplied, otherwise by (name, version); include the id to rename a component in place.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The component's slug. Optional when creating; generated from the name if omitted. Immutable after creation; an update that sends a different slug for an existing component is rejected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slug")]
    public string? Slug { get; init; }

    /// <summary>
    /// The component's name. Required.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The component's version. Defaults to "default", optional. On update, an omitted version keeps the stored value when the component is matched by id; without an id, an omitted version only matches the stored "default" version, and the request is rejected if the name exists only under other versions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public string? Version { get; init; }

    /// <summary>
    /// The component's description. On update, an omitted description keeps the stored value; send an empty string to clear it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The JSON schema fragment the component contributes. Required.
    /// </summary>
    [JsonPropertyName("schema")]
    public required IReadOnlyDictionary<string, object> Schema { get; init; }

    /// <summary>
    /// Read-only: the slugs of the components this component imports (derived from its <c>$ref</c>s).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imports")]
    public IReadOnlyList<string>? Imports { get; init; }
}
