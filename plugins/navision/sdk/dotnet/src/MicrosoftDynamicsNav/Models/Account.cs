using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Models.Enums;

namespace MicrosoftDynamicsNav.Models;

public record Account
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// The account number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("number")]
    [MaxLength(20)]
    public string? Number { get; init; }

    /// <summary>
    /// The account display name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    [MaxLength(100)]
    public string? DisplayName { get; init; }

    /// <summary>
    /// The account category
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public Category? Category { get; init; }

    /// <summary>
    /// The account subcategory
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subCategory")]
    [MaxLength(80)]
    public string? SubCategory { get; init; }

    /// <summary>
    /// Whether the account is blocked
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blocked")]
    public bool? Blocked { get; init; }

    /// <summary>
    /// The account type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountType")]
    public AccountType? AccountType { get; init; }

    /// <summary>
    /// Whether direct posting is allowed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("directPosting")]
    public bool? DirectPosting { get; init; }

    /// <summary>
    /// The net change
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("netChange")]
    public double? NetChange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consolidationTranslationMethod")]
    public string? ConsolidationTranslationMethod { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consolidationDebitAccount")]
    public string? ConsolidationDebitAccount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consolidationCreditAccount")]
    public string? ConsolidationCreditAccount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedDateTime")]
    public DateTimeOffset? LastModifiedDateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
