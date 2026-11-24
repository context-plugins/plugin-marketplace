using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record RecurringPlanResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("contact_id")]
    public required string ContactId { get; init; }

    [JsonPropertyName("first_name")]
    public required string FirstName { get; init; }

    [JsonPropertyName("last_name")]
    public required string LastName { get; init; }

    [JsonPropertyName("email")]
    public required string Email { get; init; }

    [JsonPropertyName("phone")]
    public required string Phone { get; init; }

    [JsonPropertyName("frequency")]
    public required string Frequency { get; init; }

    [JsonPropertyName("status")]
    public required string Status { get; init; }

    [JsonPropertyName("method")]
    public required string Method { get; init; }

    [JsonPropertyName("amount")]
    public required string Amount { get; init; }

    [JsonPropertyName("fee_covered")]
    public required string FeeCovered { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonPropertyName("start_at")]
    public required string StartAt { get; init; }

    [JsonPropertyName("canceled_at")]
    public required string CanceledAt { get; init; }

    [JsonPropertyName("next_bill_date")]
    public required string NextBillDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
