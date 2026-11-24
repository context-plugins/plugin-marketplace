using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record KycRazorpayPartnerStakeholdersApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pan")]
    public string? Pan { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
