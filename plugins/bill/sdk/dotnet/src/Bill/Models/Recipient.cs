using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record Recipient
{
    /// <summary>
    /// Recipient email addresses
    /// </summary>
    [JsonPropertyName("to")]
    public required IReadOnlyList<string> To { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
