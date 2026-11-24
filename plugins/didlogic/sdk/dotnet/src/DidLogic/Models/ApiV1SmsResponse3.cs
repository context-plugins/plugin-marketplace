using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1SmsResponse3
{
    /// <summary>
    /// SMS message details
    /// </summary>
    [JsonPropertyName("sms")]
    public required Sms1 Sms { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
