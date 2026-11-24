using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// The <c>Status</c> type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by <see href="https://github.com/grpc">gRPC</see>. Each <c>Status</c> message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the <see href="https://cloud.google.com/apis/design/errors">API Design Guide</see>.
/// </summary>
public record GoogleRpcStatus
{
    /// <summary>
    /// A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// The status code, which should be an enum value of google.rpc.Code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public int? Code { get; init; }

    /// <summary>
    /// A list of messages that carry the error details. There is a common set of message types for APIs to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public IReadOnlyList<object>? Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
