using System.Collections.Generic;
using System.Text.Json.Serialization;
using Curlec.Core.Models;
using Curlec.Models.Enums;

namespace Curlec.Models;

/// <summary>
/// Route product configuration for a Linked Account. Controls settlement account details and tracks activation status. Prefix: acc_prd_
/// </summary>
public record ProductConfiguration
{
    /// <summary>
    /// Product configuration ID. Prefix: acc_prd_
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Linked Account ID this configuration belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_id")]
    public string? AccountId { get; init; }

    /// <summary>
    /// Product name. Always 'route' for Route product.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("product_name")]
    public ProductName? ProductName { get; init; }

    /// <summary>
    /// Current activation status. Progresses from requested → under_review → activated. needs_clarification requires additional info from the merchant.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activation_status")]
    public ActivationStatus? ActivationStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tnc")]
    public Tnc? Tnc { get; init; }

    /// <summary>
    /// Configuration details provided during activation request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requested_configuration")]
    public object? RequestedConfiguration { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("active_configuration")]
    public ActiveConfiguration? ActiveConfiguration { get; init; }

    /// <summary>
    /// List of pending requirements needed for activation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requirements")]
    public IReadOnlyList<Requirement>? Requirements { get; init; }

    /// <summary>
    /// Unix timestamp when product was requested.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requested_at")]
    public int? RequestedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
