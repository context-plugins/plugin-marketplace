using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Models.Enums;

namespace Curlec.Models;

public record Receivers
{
    /// <summary>
    /// Receiver types. bank_account creates a virtual bank account. vpa creates a UPI VPA (Smart Collect 2.0, requires feature flag).
    /// </summary>
    [JsonPropertyName("types")]
    public required IReadOnlyList<TypeRazorpayVirtualAccountsApi> Types { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
