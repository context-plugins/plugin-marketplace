using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record TransferRecurringOrUnscheduled
{
    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonPropertyName("amount")]
    public required long Amount { get; init; }

    /// <summary>
    /// An object that contains information about the credential on file transfer.
    /// <list type="bullet">
    ///   <item><description><c>type</c>: The type of credential on file transfer. Must be one of the following values:
    ///     <list type="bullet">
    ///       <item><description><c>RECURRING</c>: A transfer that is part of a series of transfers scheduled at regular intervals. Interchange benefits for <c>RECURRING</c> transactions are available only to approved bill payment merchants in the telecommunications and cable industries (MCC 4814 and 4899).</description></item>
    ///       <item><description><c>UNSCHEDULED</c>: A merchant-initiated, one-time transaction using stored credentials, triggered when specific conditions in a cardholder agreement are met—not on a fixed schedule.</description></item>
    ///     </list>
    ///   </description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credential_on_file")]
    public CredentialOnFile4? CredentialOnFile { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

    /// <summary>
    /// The ID of the <c>Merchant</c> under which to create the <c>Transfer</c>.
    /// </summary>
    [JsonPropertyName("merchant")]
    public required string Merchant { get; init; }

    /// <summary>
    /// ID of the <c>Payment Instrument</c> where funds get debited.
    /// </summary>
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
