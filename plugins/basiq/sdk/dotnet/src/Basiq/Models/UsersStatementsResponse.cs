using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Object containing details for the statement upload process
/// </summary>
public record UsersStatementsResponse
{
    /// <summary>
    /// The type of resource, always "job".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// The unique identifier of the job.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Link object containing a link to the resource, self reference.
    /// </summary>
    [JsonPropertyName("links")]
    public required ResourceLink Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
