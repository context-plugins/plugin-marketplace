using System.Collections.Generic;
using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1SipaccountsAllowedIpsResponse
{
    /// <summary>
    /// List of allowed IP address strings
    /// </summary>
    [JsonPropertyName("allowed_ips")]
    public required IReadOnlyList<string> AllowedIps { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
