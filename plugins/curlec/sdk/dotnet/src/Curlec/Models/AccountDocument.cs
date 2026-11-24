using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

/// <summary>
/// KYC documents for a sub-merchant account. Files must be JPG/PNG (max 4MB) or PDF (max 2MB).
/// </summary>
public record AccountDocument
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_proof_of_identification")]
    public IReadOnlyList<BusinessProofOfIdentification>? BusinessProofOfIdentification { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("business_proof_of_address")]
    public IReadOnlyList<BusinessProofOfAddress>? BusinessProofOfAddress { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
