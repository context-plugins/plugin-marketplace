using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record RelationshipRazorpayPartnerStakeholdersApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("director")]
    public bool? Director { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executive")]
    public bool? Executive { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
