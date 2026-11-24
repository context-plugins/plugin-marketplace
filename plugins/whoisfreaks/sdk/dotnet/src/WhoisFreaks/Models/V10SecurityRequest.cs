using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using WhoisFreaks.Core.Models;

namespace WhoisFreaks.Models;

public record V10SecurityRequest
{
    [JsonPropertyName("ips")]
    [MaxLength(100)]
    public required IReadOnlyList<string> Ips { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
