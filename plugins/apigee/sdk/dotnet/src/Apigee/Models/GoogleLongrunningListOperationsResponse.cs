using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The response message for Operations.ListOperations.
/// </summary>
public record GoogleLongrunningListOperationsResponse
{
    /// <summary>
    /// A list of operations that matches the specified filter in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operations")]
    public IReadOnlyList<GoogleLongrunningOperation>? Operations { get; init; }

    /// <summary>
    /// Unordered list. Unreachable resources. Populated when the request sets <c>ListOperationsRequest.return_partial_success</c> and reads across collections. For example, when attempting to list all resources across all supported locations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unreachable")]
    public IReadOnlyList<string>? Unreachable { get; init; }

    /// <summary>
    /// The standard List next-page token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
