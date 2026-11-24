using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Core.Validation.Attributes;

namespace Curlec.Models;

public record VirtualAccountsRequest
{
    [JsonPropertyName("receivers")]
    public required Receivers Receivers { get; init; }

    /// <summary>
    /// Purpose of the virtual account.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// Expected amount in paise. Set to 0 to accept any amount.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public int? Amount { get; init; }

    /// <summary>
    /// Link to an existing customer (cust_*).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer_id")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// Unix timestamp to auto-close the account. Maximum: 2147483647.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("close_by")]
    public int? CloseBy { get; init; }

    /// <summary>
    /// Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    [MaxProperties(15)]
    public IReadOnlyDictionary<string, string>? Notes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
