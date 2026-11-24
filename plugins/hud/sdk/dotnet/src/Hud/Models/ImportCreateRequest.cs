using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record ImportCreateRequest
{
    [JsonPropertyName("format")]
    public string Format { get; } = "harbor";

    /// <summary>
    /// A ready data file holding the bundle
    /// </summary>
    [JsonPropertyName("file_id")]
    public required Guid FileId { get; init; }

    /// <summary>
    /// The taskset the bundle is imported into; the caller must be able to edit it
    /// </summary>
    [JsonPropertyName("taskset_id")]
    public required Guid TasksetId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
