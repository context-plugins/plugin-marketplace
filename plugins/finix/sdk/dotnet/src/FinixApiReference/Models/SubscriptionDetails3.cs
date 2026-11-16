using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// An object containing subscription details.
/// </summary>
public record SubscriptionDetails3
{
    /// <summary>
    /// The method by which subscription payments are collected. Currently, automatic billing of the <c>Payment Instrument</c> is the only available method.
    /// </summary>
    [JsonPropertyName("collection_method")]
    public string CollectionMethod { get; } = "BILL_AUTOMATICALLY";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
