using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1SipaccountsAllowedIpsResponse1
{
    /// <summary>
    /// List of allowed IP addresses after creation
    /// </summary>
    [JsonPropertyName("allowed_ips")]
    public required IReadOnlyList<string> AllowedIps { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
