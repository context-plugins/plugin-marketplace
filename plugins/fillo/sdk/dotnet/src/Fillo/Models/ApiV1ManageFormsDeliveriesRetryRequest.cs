using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Models.Enums;

namespace Fillo.Models;

/// <summary>
/// Exactly one target. deliveryKind and deliveryId are required together.
/// </summary>
public record ApiV1ManageFormsDeliveriesRetryRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseIds")]
    [MaxLength(200)]
    public IReadOnlyList<string>? ResponseIds { get; init; }

    /// <summary>
    /// A <c>key</c> from the delivery-health destinations list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destinationKey")]
    [StringLength(128, MinimumLength = 1)]
    public string? DestinationKey { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deliveryKind")]
    public DeliveryKind? DeliveryKind { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deliveryId")]
    [StringLength(128, MinimumLength = 1)]
    public string? DeliveryId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("all")]
    public bool? All { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
