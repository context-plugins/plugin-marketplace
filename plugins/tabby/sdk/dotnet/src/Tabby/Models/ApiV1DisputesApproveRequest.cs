using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Tabby.Core.Models;

namespace Tabby.Models;

public record ApiV1DisputesApproveRequest
{
    /// <summary>
    /// Array of dispute ids. Only 20 disputes can be approved within a single request.
    /// </summary>
    [JsonPropertyName("dispute_ids")]
    public required IReadOnlyList<Guid> DisputeIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
