using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record ApiV1MiscGoogleBusinessLocationHoursRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("validateOnly")]
    public bool? ValidateOnly { get; init; }

    [JsonPropertyName("fields")]
    [MinLength(1)]
    [MaxLength(3)]
    public required IReadOnlyList<Field1> Fields { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("regularHours")]
    public RegularHours? RegularHours { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specialHours")]
    public SpecialHours? SpecialHours { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("moreHours")]
    public IReadOnlyList<MoreHour>? MoreHours { get; init; }
}
