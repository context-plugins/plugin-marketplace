using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record FundAccountsRequest1
{
    [JsonPropertyName("active")]
    public required bool Active { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
