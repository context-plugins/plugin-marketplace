using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lili.Core.Models;
using Lili.Core.Validation;
using Lili.Core.Validation.Attributes;

namespace Lili.Models;

/// <summary>
/// Contains the information on an account registration.
/// </summary>
public record LeadResponse
{
    /// <summary>
    /// A unique ID for the customer (same as person ID)
    /// </summary>
    [JsonPropertyName("customerId")]
    public required Guid CustomerId { get; init; }

    /// <summary>
    /// A unique URL to be used by the customer for a personalized application flow
    /// </summary>
    [JsonPropertyName("location")]
    [Format(FormatKind.Uri)]
    public required string Location { get; init; }

    /// <summary>
    /// The token that should be sent to Lili Connect UI
    /// </summary>
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    /// <summary>
    /// The uniqueID provided by the partner in the Create Application call. Empty if none was supplied
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partnerSuppliedId")]
    public string? PartnerSuppliedId { get; init; }

    /// <summary>
    /// The unique ID of the registered person
    /// </summary>
    [JsonPropertyName("personId")]
    public required Guid PersonId { get; init; }

    /// <summary>
    /// The metadata key-value pairs stored on the customer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public IReadOnlyDictionary<string, string>? Metadata { get; init; }

    /// <summary>
    /// The UBOs of the business
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uboData")]
    public IReadOnlyList<UboResponseData>? UboData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
