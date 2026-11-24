using System.Collections.Generic;
using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record Customer1
{
    /// <summary>
    /// The unique ID of the customer. You may use either the customer's <c>id</c> on CodeQR (obtained via <c>/customers</c> endpoint) or their <c>externalId</c> (unique ID within your system, prefixed with <c>ext_</c>, e.g. <c>ext_123</c>).
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Unique identifier for the customer in the client's app.
    /// </summary>
    [JsonPropertyName("externalId")]
    public required string ExternalId { get; init; }

    /// <summary>
    /// Name of the customer.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Email of the customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// Avatar URL of the customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avatar")]
    public string? Avatar { get; init; }

    /// <summary>
    /// Country of the customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// The date the customer was created.
    /// </summary>
    [JsonPropertyName("createdAt")]
    public required string CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("link")]
    public Link2? Link { get; init; }

    /// <summary>
    /// Custom fields of the customer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customFields")]
    public IReadOnlyDictionary<string, string>? CustomFields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
