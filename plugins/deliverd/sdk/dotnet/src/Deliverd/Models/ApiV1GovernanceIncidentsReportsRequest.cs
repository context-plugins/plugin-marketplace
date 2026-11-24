using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1GovernanceIncidentsReportsRequest
{
    /// <summary>
    /// initial, intermediate, final, or reclassification (as non-major)
    /// </summary>
    [JsonPropertyName("kind")]
    public required KindDeliverdDevGovernanceApi Kind { get; init; }

    /// <summary>
    /// What the report says, written for the person who signs it off and for the authority
    /// </summary>
    [JsonPropertyName("content")]
    [StringLength(20000, MinimumLength = 1)]
    public required string Content { get; init; }

    /// <summary>
    /// The report's structured fields. initial: discoveredBy, memberStates, originatedAtThirdParty, businessContinuityActivated; intermediate: incidentType, occurredAt, recoveredAt, authorityReference, clientsAffected, figuresAreEstimates, temporaryMeasures; final: rootCause, rootCauseAddressedAt, resolvedAt, grossCostsEur, financialRecoveriesEur; reclassification: reason
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fields")]
    public IReadOnlyDictionary<string, object>? Fields { get; init; }

    /// <summary>
    /// Who signs it off; the organisation's administrators when omitted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approvers")]
    [MaxLength(20)]
    public IReadOnlyList<string>? Approvers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
