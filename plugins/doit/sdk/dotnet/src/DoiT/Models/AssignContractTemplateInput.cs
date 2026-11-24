using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// The customers a contract template is applied to.
/// </summary>
public record AssignContractTemplateInput
{
    /// <summary>
    /// Identifiers of the customers to create a draft contract for. Each identifier must name a tenant within the authenticated tenant's own hierarchy, of the tier one level below it: a distributor supplies resellers, a reseller supplies end customers. Repeated identifiers are ignored, and a customer already holding a contract from this template receives another draft.
    /// </summary>
    [JsonPropertyName("customerIds")]
    [MinLength(1)]
    [MaxLength(250)]
    public required IReadOnlyList<string> CustomerIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
