using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;
using Skribble.Models.Enums;

namespace Skribble.Models;

public record TrackSendToResponse
{
    /// <summary>
    /// Status of the Send-To request
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusSkribbleSendToApi Status { get; init; }

    /// <summary>
    /// User who claimed the Send-To request
    /// </summary>
    [JsonPropertyName("creator")]
    public required string? Creator { get; init; }

    /// <summary>
    /// List of signers for the Send-To request
    /// </summary>
    [JsonPropertyName("signers")]
    public required IReadOnlyList<string>? Signers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
