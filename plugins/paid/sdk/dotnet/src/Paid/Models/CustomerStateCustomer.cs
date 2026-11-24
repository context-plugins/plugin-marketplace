using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomerStateCustomer
{
    /// <summary>
    /// Stable Paid customer display ID. Use this value as the <c>{id}</c> path parameter for customer routes, for example <c>GET /api/v2/customers/cus_abc123/state</c>.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("externalId")]
    public required string? ExternalId { get; init; }

    /// <summary>
    /// Customer billing address, or null when no address is set.
    /// </summary>
    [JsonPropertyName("billingAddress")]
    public required CustomerBillingAddressResponse BillingAddress { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
