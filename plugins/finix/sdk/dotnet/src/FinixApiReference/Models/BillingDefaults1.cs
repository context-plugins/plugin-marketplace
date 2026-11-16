using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// Object containing default billing settings.
/// </summary>
public record BillingDefaults1
{
    /// <summary>
    /// The method by which subscription payments are collected.
    /// </summary>
    [JsonPropertyName("collection_method")]
    public required CollectionMethod1 CollectionMethod { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
