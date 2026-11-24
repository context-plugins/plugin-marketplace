using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;

namespace Statable.Models;

public record SitesSettingsBlockedIpsResponse
{
    /// <summary>
    /// Blocked client IPs, as strings. Note the asymmetry with PUT, which takes the bare array as its request body.
    /// </summary>
    [JsonPropertyName("blocked_ips")]
    public required IReadOnlyList<string> BlockedIps { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
