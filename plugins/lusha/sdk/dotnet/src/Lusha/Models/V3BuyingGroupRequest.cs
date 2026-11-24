using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation.Attributes;
using Lusha.Models.Enums;

namespace Lusha.Models;

public record V3BuyingGroupRequest
{
    [JsonPropertyName("companies")]
    [MinLength(1)]
    [MaxLength(25)]
    public required IReadOnlyList<V3BuyingGroupCompanyItem> Companies { get; init; }

    /// <summary>
    /// Filter results to specific persona roles. Omit to return all three.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personas")]
    public IReadOnlyList<Persona>? Personas { get; init; }

    /// <summary>
    /// Maximum number of contacts returned per company.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contactsLimit")]
    [Minimum(1)]
    public int? ContactsLimit { get; init; } = 60;

    /// <summary>
    /// Optional. If omitted, defaults to page 0, size 100.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pagination")]
    public PaginationModel? Pagination { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
