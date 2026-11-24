using System.Text.Json.Serialization;
using ZeroBounce.Core.Models;

namespace ZeroBounce.Models;

public record ValidateEmailRequest
{
    /// <summary>
    /// The user's ZeroBounce API key. Optional. The user can perform up to 3 requests per day without providing this API key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("api_key")]
    public string? ApiKey { get; init; }

    /// <summary>
    /// The email you want to validate.
    /// </summary>
    [JsonPropertyName("email")]
    public required string Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
