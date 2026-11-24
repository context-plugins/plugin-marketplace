using System.Text.Json.Serialization;
using Celestia.Core.Models;
using Celestia.Models.AnyOf;

namespace Celestia.Models;

public record JsonRpcResponse
{
    [JsonPropertyName("jsonrpc")]
    public required string Jsonrpc { get; init; }

    [JsonPropertyName("id")]
    public required Id? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public object? Result { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public Error? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
