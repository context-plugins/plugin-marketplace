using System.Text.Json.Serialization;
using RelmCrm.Core.Models;

namespace RelmCrm.Models;

public record DealInput
{
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value_cents")]
    public int? ValueCents { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    /// <summary>
    /// Pipeline key or pl_ id (defaults to the default pipeline).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pipeline")]
    public string? Pipeline { get; init; }

    /// <summary>
    /// Stage key within the deal's pipeline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stage")]
    public string? Stage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_id")]
    public string? CompanyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary_contact_id")]
    public string? PrimaryContactId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("close_date")]
    public string? CloseDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields")]
    public object? CustomFields { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
