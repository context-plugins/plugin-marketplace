using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using WhoisFreaks.Core.Models;

namespace WhoisFreaks.Models;

public record V20BulkwhoisLiveRequest
{
    [JsonPropertyName("domainNames")]
    [MaxLength(100)]
    public required IReadOnlyList<string> DomainNames { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
