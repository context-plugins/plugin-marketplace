using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record V2AccountsProductsRequest
{
    [JsonPropertyName("product_name")]
    public string ProductName { get; } = "route";

    /// <summary>
    /// Set to true to accept Razorpay TnC on behalf of the sub-merchant.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tnc_accepted")]
    public bool? TncAccepted { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicable_identified")]
    public bool? ApplicableIdentified { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
