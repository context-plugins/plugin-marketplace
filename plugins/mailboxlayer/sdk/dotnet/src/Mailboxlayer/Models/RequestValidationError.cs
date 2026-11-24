using System.Collections.Generic;
using System.Text.Json.Serialization;
using Mailboxlayer.Core.Models;

namespace Mailboxlayer.Models;

/// <summary>
/// FastAPI request-validation error body. Returned with HTTP 422 when a required query parameter is missing or malformed. This is a different shape from the ApiError envelope used for service-level errors (which are returned with HTTP 200).
/// </summary>
public record RequestValidationError
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public IReadOnlyList<Detail>? Detail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
