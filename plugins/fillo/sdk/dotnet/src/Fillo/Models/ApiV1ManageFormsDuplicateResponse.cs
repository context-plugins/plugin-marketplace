using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Core.Validation;
using Fillo.Core.Validation.Attributes;

namespace Fillo.Models;

public record ApiV1ManageFormsDuplicateResponse
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("slug")]
    public required string Slug { get; init; }

    [JsonPropertyName("status")]
    public string Status { get; } = "draft";

    /// <summary>
    /// The form this copy came from.
    /// </summary>
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
