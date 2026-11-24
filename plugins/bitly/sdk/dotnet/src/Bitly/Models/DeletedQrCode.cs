using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record DeletedQrCode
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
