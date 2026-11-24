using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1DanevalidatorRequest
{
    /// <summary>
    /// The DANE/TLSA record string to validate
    /// </summary>
    [JsonPropertyName("record")]
    public required string Record { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
