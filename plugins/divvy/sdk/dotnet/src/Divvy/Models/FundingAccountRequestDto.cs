using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Funding Account object.
/// </summary>
public record FundingAccountRequestDto
{
    /// <summary>
    /// BILL-generated ID of the customer funding account. For a customer bank account, the value begins with <c>cba</c>.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("type")]
    public required ReceivableFundingAccountTypeRequestDto Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
