using System.Collections.Generic;
using System.Text.Json.Serialization;
using Celestia.Core.Models;
using Celestia.Models.AnyOf;
using Celestia.Models.Enums;

namespace Celestia.Models;

public record JsonRpcRequest
{
    [JsonPropertyName("jsonrpc")]
    public string Jsonrpc { get; } = "2.0";

    [JsonPropertyName("id")]
    public required Id Id { get; init; }

    [JsonPropertyName("method")]
    public required Method Method { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("params")]
    public IReadOnlyList<object>? Params { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
