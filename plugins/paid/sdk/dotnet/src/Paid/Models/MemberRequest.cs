using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record MemberRequest
{
    /// <summary>
    /// External customer IDs.
    /// </summary>
    [JsonPropertyName("customerIds")]
    public required IReadOnlyList<string> CustomerIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
