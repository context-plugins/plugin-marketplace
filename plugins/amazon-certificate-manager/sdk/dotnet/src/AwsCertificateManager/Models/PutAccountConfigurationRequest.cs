using System.Text.Json.Serialization;
using AwsCertificateManager.Core.Models;

namespace AwsCertificateManager.Models;

public record PutAccountConfigurationRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExpiryEvents")]
    public ExpiryEventsConfiguration? ExpiryEvents { get; init; }

    /// <summary>
    /// Customer-chosen string used to distinguish between calls to PutAccountConfiguration. Idempotency tokens time out after one hour. If you call PutAccountConfiguration multiple times with the same unexpired idempotency token, ACM treats it as the same request and returns the original result. If you change the idempotency token for each call, ACM treats each call as a new request.
    /// </summary>
    [JsonPropertyName("IdempotencyToken")]
    public required string IdempotencyToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
