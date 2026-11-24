using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record VirtualAccountsReceiversRequest
{
    /// <summary>
    /// Must contain 'vpa'.
    /// </summary>
    [JsonPropertyName("types")]
    public required IReadOnlyList<Type1RazorpayVirtualAccountsApi> Types { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
