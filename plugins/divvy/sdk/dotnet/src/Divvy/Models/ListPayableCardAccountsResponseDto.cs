using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// List Card Accounts response DTO.
/// </summary>
public record ListPayableCardAccountsResponseDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rates")]
    public Rates? Rates { get; init; }

    /// <summary>
    /// List of card accounts
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cards")]
    public IReadOnlyList<CardAccountResponseDto>? Cards { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
