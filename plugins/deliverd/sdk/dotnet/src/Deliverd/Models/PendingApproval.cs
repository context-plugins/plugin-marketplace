using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

/// <summary>
/// The version waiting on an approver, if one is.
/// </summary>
public record PendingApproval
{
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    [JsonPropertyName("versionNumber")]
    public required double VersionNumber { get; init; }

    [JsonPropertyName("since")]
    public required string Since { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
