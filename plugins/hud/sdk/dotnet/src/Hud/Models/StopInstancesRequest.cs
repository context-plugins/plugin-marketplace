using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record StopInstancesRequest
{
    [JsonPropertyName("registry_id")]
    public required Guid RegistryId { get; init; }

    [JsonPropertyName("instance_ids")]
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<Guid> InstanceIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
