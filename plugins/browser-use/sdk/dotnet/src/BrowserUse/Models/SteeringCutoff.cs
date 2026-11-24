using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Models;

namespace BrowserUse.Models;

/// <summary>
/// Earliest accepted steer for one interrupted source run.
/// <para>
/// The queue endpoint returns these compact boundaries separately from message
/// rows so a remount can keep every interrupted transcript frozen without
/// re-sending the full historical steering-message payload.
/// </para>
/// </summary>
public record SteeringCutoff
{
    [JsonPropertyName("sourceRunId")]
    public required Guid SourceRunId { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
