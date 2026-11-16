using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record CompleteComplianceForm
{
    /// <summary>
    /// Details about the signee's digital signature.
    /// </summary>
    [JsonPropertyName("pci_saq_a")]
    public required PciSaqA1 PciSaqA { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
