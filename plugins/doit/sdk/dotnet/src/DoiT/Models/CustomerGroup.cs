using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

public record CustomerGroup
{
    /// <summary>
    /// Stable service-generated customer-group ID.
    /// </summary>
    [JsonPropertyName("id")]
    [StringLength(200, MinimumLength = 1)]
    public required string Id { get; init; }

    /// <summary>
    /// Authenticated tenant that owns the customer group.
    /// </summary>
    [JsonPropertyName("customerId")]
    public required string CustomerId { get; init; }

    /// <summary>
    /// Customer-visible customer-group name.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(200, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// Customer IDs that are members of this group.
    /// </summary>
    [JsonPropertyName("memberCustomerIds")]
    [MinLength(1)]
    [UniqueItems]
    public required IReadOnlyList<string> MemberCustomerIds { get; init; }

    /// <summary>
    /// User or service-account identifier that created the group.
    /// </summary>
    [JsonPropertyName("createdBy")]
    public required string CreatedBy { get; init; }

    /// <summary>
    /// Time the group was created.
    /// </summary>
    [JsonPropertyName("timeCreated")]
    public required DateTimeOffset TimeCreated { get; init; }

    /// <summary>
    /// Time the group was last modified.
    /// </summary>
    [JsonPropertyName("timeModified")]
    public required DateTimeOffset TimeModified { get; init; }
}
