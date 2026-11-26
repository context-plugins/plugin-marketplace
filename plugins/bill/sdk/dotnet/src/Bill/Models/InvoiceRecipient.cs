using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Invoice Recipient object.
/// </summary>
public record InvoiceRecipient
{
    /// <summary>
    /// Recipient email addresses
    /// </summary>
    [JsonPropertyName("to")]
    public required IReadOnlyList<string> To { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
