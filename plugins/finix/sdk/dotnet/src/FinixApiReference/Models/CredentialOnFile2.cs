using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

/// <summary>
/// An object that contains information about the credential on file transfer.
/// <list type="bullet">
///   <item><description><c>type</c>: The type of credential on file transfer. Must be one of the following values:
///     <list type="bullet">
///       <item><description><c>RECURRING</c>: A transfer that is part of a series of transfers scheduled at regular intervals. Interchange benefits for <c>RECURRING</c> transactions are available only to approved bill payment merchants in the telecommunications and cable industries (MCC 4814 and 4899).</description></item>
///       <item><description><c>UNSCHEDULED</c>: A merchant-initiated, one-time transaction using stored credentials, triggered when specific conditions in a cardholder agreement are met—not on a fixed schedule.</description></item>
///     </list>
///   </description></item>
///   <item><description><c>initial_transfer_id</c>: The ID of the initial transfer in the recurring series. This field is required for both <c>RECURRING</c> and <c>UNSCHEDULED</c> types.</description></item>
/// </list>
/// </summary>
public record CredentialOnFile2
{
    /// <summary>
    /// The ID of the initial transfer in the series.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("initial_transfer_id")]
    public string? InitialTransferId { get; init; }

    [JsonPropertyName("type")]
    public required Type2 Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
