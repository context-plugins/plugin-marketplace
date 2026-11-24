using System;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;
using Hud.Models.Enums;

namespace Hud.Models;

/// <summary>
/// The task one upload item landed on.
/// </summary>
public record TaskUploadResult
{
    [JsonPropertyName("external_id")]
    public required string ExternalId { get; init; }

    [JsonPropertyName("task_id")]
    public required Guid TaskId { get; init; }

    [JsonPropertyName("task_version_id")]
    public required TaskVersionId TaskVersionId { get; init; }

    [JsonPropertyName("outcome")]
    public required OutcomeHudPlatformTasksApi Outcome { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
