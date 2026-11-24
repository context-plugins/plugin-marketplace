using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record V2AccountsProductsRequest1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlements")]
    public Settlements1? Settlements { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tnc_accepted")]
    public bool? TncAccepted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
