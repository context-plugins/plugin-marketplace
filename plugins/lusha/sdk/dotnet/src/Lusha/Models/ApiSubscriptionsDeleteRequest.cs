using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record ApiSubscriptionsDeleteRequest
{
    /// <summary>
    /// Array of subscription IDs to delete
    /// </summary>
    [JsonPropertyName("ids")]
    [MinLength(1)]
    [MaxLength(25)]
    public required IReadOnlyList<string> Ids { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
