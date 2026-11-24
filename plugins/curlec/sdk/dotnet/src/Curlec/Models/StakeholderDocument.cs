using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

/// <summary>
/// KYC documents for a stakeholder. Supports PAN, Aadhaar, passport, and voter ID. Files must be JPG/PNG (max 4MB) or PDF (max 2MB).
/// </summary>
public record StakeholderDocument
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("individual_proof_of_address")]
    public IReadOnlyList<IndividualProofOfAddress>? IndividualProofOfAddress { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("individual_proof_of_identification")]
    public IReadOnlyList<IndividualProofOfIdentification>? IndividualProofOfIdentification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
