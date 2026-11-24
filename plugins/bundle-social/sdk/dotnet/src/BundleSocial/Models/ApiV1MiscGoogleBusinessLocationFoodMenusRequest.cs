using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1MiscGoogleBusinessLocationFoodMenusRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonPropertyName("fields")]
    [MinLength(1)]
    [MaxLength(1)]
    public required IReadOnlyList<Field4> Fields { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("menus")]
    public IReadOnlyList<object>? Menus { get; init; }
}
