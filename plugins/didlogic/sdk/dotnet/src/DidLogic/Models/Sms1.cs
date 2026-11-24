using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

/// <summary>
/// SMS message details
/// </summary>
public record Sms1
{
    /// <summary>
    /// SMS ID
    /// </summary>
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    /// <summary>
    /// Destination number
    /// </summary>
    [JsonPropertyName("destination")]
    public required string Destination { get; init; }

    /// <summary>
    /// Message content
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Delivery status
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusDidlogicComSmsApi Status { get; init; }

    /// <summary>
    /// SMS cost
    /// </summary>
    [JsonPropertyName("charge")]
    public required double Charge { get; init; }

    /// <summary>
    /// Number of segments
    /// </summary>
    [JsonPropertyName("segments_count")]
    public required int SegmentsCount { get; init; }

    /// <summary>
    /// Why the SMS failed, as an SMPP command_status; <c>null</c> unless <c>status</c> is <c>failed</c>. A failure with no more specific code reads <c>255</c>.
    /// - <c>10</c> (<c>ESME_RINVSRCADR</c>) — Invalid sender ID: the sender ID is not accepted for this destination
    /// - <c>11</c> (<c>ESME_RINVDSTADR</c>) — Invalid destination number: the destination number is not valid
    /// - <c>69</c> (<c>ESME_RSUBMITFAIL</c>) — Submit failed: the message was rejected and not delivered
    /// - <c>255</c> (<c>ESME_RUNKNOWNERR</c>) — Unknown error: the message failed for any other reason
    /// </summary>
    [JsonPropertyName("error_code")]
    public required int? ErrorCode { get; init; }

    /// <summary>
    /// The text for <c>error_code</c> ("Invalid sender ID", "Invalid destination number", "Submit failed", "Unknown error"); <c>null</c> unless <c>status</c> is <c>failed</c>.
    /// </summary>
    [JsonPropertyName("error_description")]
    public required string? ErrorDescription { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
