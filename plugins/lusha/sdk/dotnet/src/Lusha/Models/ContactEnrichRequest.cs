using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record ContactEnrichRequest
{
    /// <summary>
    /// The requestId generated in the Prospecting Search response (UUID)
    /// </summary>
    [JsonPropertyName("requestId")]
    public required string RequestId { get; init; }

    /// <summary>
    /// An array containing the contact IDs for enrichment. Min 1, max 100.
    /// </summary>
    [JsonPropertyName("contactIds")]
    public required IReadOnlyList<string> ContactIds { get; init; }

    /// <summary>
    /// Set <c>revealEmails=true</c> to retrieve only the email address of the contact. Only available to customers on the <b>Unified Credits</b> pricing plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revealEmails")]
    public bool? RevealEmails { get; init; }

    /// <summary>
    /// Set <c>revealPhones=true</c> to retrieve only the phone number of the contact. Only available to customers on the <b>Unified Credits</b> pricing plan.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revealPhones")]
    public bool? RevealPhones { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
