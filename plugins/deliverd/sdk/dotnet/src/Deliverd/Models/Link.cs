using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation;
using Deliverd.Core.Validation.Attributes;

namespace Deliverd.Models;

public record Link
{
    [JsonPropertyName("label")]
    [StringLength(100, MinimumLength = 1)]
    public required string Label { get; init; }

    [JsonPropertyName("url")]
    [MaxLength(2000)]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
