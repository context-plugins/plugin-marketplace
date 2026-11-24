using System.Collections.Generic;
using System.Text.Json.Serialization;
using Upstox.Core.Models;
using Upstox.Models.Enums;

namespace Upstox.Models;

/// <summary>
/// Response data for user profile
/// </summary>
public record ProfileData2
{
    /// <summary>
    /// E-mail address of the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// Lists the exchanges to which the user has access
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchanges")]
    public IReadOnlyList<Exchange>? Exchanges { get; init; }

    /// <summary>
    /// Lists the products types to which the user has access
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("products")]
    public IReadOnlyList<Product>? Products { get; init; }

    /// <summary>
    /// The broker ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("broker")]
    public string? Broker { get; init; }

    /// <summary>
    /// Uniquely identifies the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user_id")]
    public string? UserId { get; init; }

    /// <summary>
    /// Name of the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user_name")]
    public string? UserName { get; init; }

    /// <summary>
    /// Order types enabled for the user
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order_types")]
    public IReadOnlyList<OrderType>? OrderTypes { get; init; }

    /// <summary>
    /// Identifies the user's registered role at the broker. This will be individual for all retail users
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user_type")]
    public string? UserType { get; init; }

    /// <summary>
    /// To depict if the user has given power of attorney for transactions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("poa")]
    public bool? Poa { get; init; }

    /// <summary>
    /// Indicates if DDPI is enabled for trading
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ddpi")]
    public bool? Ddpi { get; init; }

    /// <summary>
    /// Whether the status of account is active or not
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_active")]
    public bool? IsActive { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
