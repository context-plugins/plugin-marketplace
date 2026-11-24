using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1SmsResponse1
{
    /// <summary>
    /// Created SMS details
    /// </summary>
    [JsonPropertyName("sms")]
    public required Sms Sms { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
