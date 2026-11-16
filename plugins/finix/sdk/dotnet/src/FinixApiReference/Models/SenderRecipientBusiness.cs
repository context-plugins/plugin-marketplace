using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record SenderRecipientBusiness
{
    /// <summary>
    /// Identifying information about the recipient business.
    /// </summary>
    [JsonPropertyName("entity")]
    public required Entity3 Entity { get; init; }

    /// <summary>
    /// The set of roles available to the <c>Identity</c>.
    /// </summary>
    [JsonPropertyName("identity_roles")]
    [MinLength(2)]
    [UniqueItems]
    public required IReadOnlyList<IdentityRole6> IdentityRoles { get; init; }

    /// <summary>
    /// The identity type.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "BUSINESS";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
