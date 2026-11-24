using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1CodedetectorRequest
{
    /// <summary>
    /// The code snippet you want to detect the programming language of
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
