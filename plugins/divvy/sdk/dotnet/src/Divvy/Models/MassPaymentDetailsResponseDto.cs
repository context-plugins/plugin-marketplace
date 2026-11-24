using System.Collections.Generic;
using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Mass payment details response DTO.
/// </summary>
public record MassPaymentDetailsResponseDto
{
    /// <summary>
    /// Total number of payments in the mass payment batch
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("count")]
    public int? Count { get; init; }

    /// <summary>
    /// Scheduled payments. For each payment in the list, BILL has not started generating a payment <c>id</c> value and API response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduled")]
    public IReadOnlyList<ScheduledPaymentDto>? Scheduled { get; init; }

    /// <summary>
    /// Completed payments. For each payment in the list, BILL has successfully generated a payment <c>id</c> value and API response.
    /// <para>
    /// In the response, if the payment <c>id</c> is the same for multiple bills, the vendor has <c>combinePayments</c> set as <c>true</c>.
    /// </para>
    /// <para>
    /// <b>Note</b>: From the list of <c>completed</c> payments, BILL begins processing payments based on the payment <c>processDate</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed")]
    public IReadOnlyList<CompletedPaymentDto>? Completed { get; init; }

    /// <summary>
    /// Failed payments. An error response is available for each failed payment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failed")]
    public IReadOnlyList<FailedPaymentDto>? Failed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
