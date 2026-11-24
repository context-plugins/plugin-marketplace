using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The database or warehouse where your data is stored. The starting point for
/// a Hightouch data pipeline.
/// </summary>
public record Source
{
    /// <summary>
    /// The source's id
    /// </summary>
    [JsonPropertyName("id")]
    public required double Id { get; init; }

    /// <summary>
    /// The source's name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The source's slug
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// The id of the workspace that the source belongs to
    /// </summary>
    [JsonPropertyName("workspaceId")]
    public required double WorkspaceId { get; init; }

    /// <summary>
    /// The timestamp when the source was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The timestamp when the source was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The source's configuration. This specifies general metadata about sources, like connection details
    /// Hightouch will use this configuration to connect to underlying source.
    /// <para>
    /// The schema depends on the source type.
    /// </para>
    /// <para>
    /// Consumers should NOT make assumptions on the contents of the
    /// configuration. It may change as Hightouch updates its internal code.
    /// </para>
    /// </summary>
    [JsonPropertyName("configuration")]
    public required IReadOnlyDictionary<string, object> Configuration { get; init; }

    /// <summary>
    /// The source's type (e.g. snowflake or postgres).
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }
}
