using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record File
{
    [JsonPropertyName("path")]
    [StringLength(500, MinimumLength = 1)]
    public required string Path { get; init; }

    [JsonPropertyName("content")]
    [MaxLength(2097152)]
    public required string Content { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encoding")]
    public Encoding? Encoding { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
