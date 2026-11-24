using System.Text.Json.Serialization;
using ZeroBounce.Core.Models;

namespace ZeroBounce.Models;

public record ValidateBatchRequest
{
    /// <summary>
    /// The user's ZeroBounce API key.
    /// </summary>
    [JsonPropertyName("api_key")]
    public required string ApiKey { get; init; }

    /// <summary>
    /// A string representing a comma-separated list of emails to validate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emails")]
    public string? Emails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
