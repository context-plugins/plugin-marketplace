using System.Collections.Generic;
using System.Text.Json.Serialization;
using Surfe.Core.Models;

namespace Surfe.Models;

public record PeopleFindByEmailRequest
{
    /// <summary>
    /// Email addresses to enrich.
    /// </summary>
    [JsonPropertyName("emails")]
    public required IReadOnlyList<string> Emails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
