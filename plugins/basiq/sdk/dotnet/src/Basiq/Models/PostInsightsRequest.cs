using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.AnyOf;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record PostInsightsRequest
{
    /// <summary>
    /// Array of user IDs to generate the insight for. Minimum 1, maximum 10 users.
    /// </summary>
    [JsonPropertyName("users")]
    [MinLength(1)]
    [MaxLength(10)]
    public required IReadOnlyList<Guid> Users { get; init; }

    /// <summary>
    /// The type of insight to generate.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeInsightsApi Type { get; init; }

    /// <summary>
    /// Input data for the insight. The required fields vary by <c>type</c>.
    /// </summary>
    [JsonPropertyName("data")]
    public required DataInsightsApi Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
