using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

/// <summary>
/// Extra data (booking info, insurance, flight reservations, ...) as serialized JSON
/// </summary>
public record AttachmentV1
{
    /// <summary>
    /// Should be an object containing any of the keys with corresponded sub objects
    /// </summary>
    [JsonPropertyName("body")]
    public required Body Body { get; init; }

    /// <summary>
    /// Version of used schema
    /// </summary>
    [JsonPropertyName("content_type")]
    public string ContentType { get; init; } = "application/vnd.tabby.v1+json";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
