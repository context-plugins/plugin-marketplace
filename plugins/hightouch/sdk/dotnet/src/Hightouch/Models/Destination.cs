using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// The service receiving your data (e.g. Salesforce, Hubspot, Customer.io, or a
/// SFTP server)
/// </summary>
public record Destination
{
    /// <summary>
    /// The destination's id
    /// </summary>
    [JsonPropertyName("id")]
    public required double Id { get; init; }

    /// <summary>
    /// The destination's name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The destination's slug
    /// </summary>
    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    /// <summary>
    /// The id of the workspace that the destination belongs to
    /// </summary>
    [JsonPropertyName("workspaceId")]
    public required double WorkspaceId { get; init; }

    /// <summary>
    /// The timestamp when the destination was created
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The timestamp when the destination was last updated
    /// </summary>
    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The destination's type (e.g. salesforce or hubspot).
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// The destination's configuration. This specifies general metadata about destination, like hostname and username.
    /// Hightouch will be using this configuration to connect to destination.
    /// <para>
    /// The schema depends on the destination type.
    /// </para>
    /// <para>
    /// Consumers should NOT make assumptions on the contents of the
    /// configuration. It may change as Hightouch updates its internal code.
    /// </para>
    /// </summary>
    [JsonPropertyName("configuration")]
    public required IReadOnlyDictionary<string, object> Configuration { get; init; }

    /// <summary>
    /// A list of syncs that sync to this destination.
    /// </summary>
    [JsonPropertyName("syncs")]
    public required IReadOnlyList<double> Syncs { get; init; }
}
