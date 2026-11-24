using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

public record GeographicAccessCustomRegion
{
    /// <summary>
    /// Stable service-generated custom-region ID.
    /// </summary>
    [JsonPropertyName("id")]
    [StringLength(200, MinimumLength = 1)]
    public required string Id { get; init; }

    /// <summary>
    /// Authenticated tenant that owns the custom region.
    /// </summary>
    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    /// <summary>
    /// Customer-visible custom-region name.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(200, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// Canonical ISO 3166-1 alpha-2 country codes in the region.
    /// </summary>
    [JsonPropertyName("countryCodes")]
    [MinLength(1)]
    [UniqueItems]
    public required IReadOnlyList<string> CountryCodes { get; init; }

    /// <summary>
    /// User or service-account identifier that created the region.
    /// </summary>
    [JsonPropertyName("createdBy")]
    public required string CreatedBy { get; init; }

    /// <summary>
    /// Time the region was created.
    /// </summary>
    [JsonPropertyName("timeCreated")]
    public required DateTimeOffset TimeCreated { get; init; }

    /// <summary>
    /// Time the region was last modified.
    /// </summary>
    [JsonPropertyName("timeModified")]
    public required DateTimeOffset TimeModified { get; init; }
}
