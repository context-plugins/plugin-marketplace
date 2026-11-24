using System.Text.Json.Serialization;
using Postscript.Core.Models;

namespace Postscript.Models;

public record ApiV2ComplianceUnsubscribeRequest
{
    /// <summary>
    /// ID of the subscriber you'd like to opt out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postscript_subscriber_id")]
    public string? PostscriptSubscriberId { get; init; }

    /// <summary>
    /// A phone number of the subscriber you'd like to opt out.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone_number")]
    public string? PhoneNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
