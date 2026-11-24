using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1CsrparserRequest
{
    /// <summary>
    /// The PEM-formatted Certificate Signing Request to parse
    /// </summary>
    [JsonPropertyName("csr")]
    public required string Csr { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
