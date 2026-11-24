using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.Enums;

namespace OddsRelay.Models;

public record Health
{
    /// <summary>
    /// <c>degraded</c> when a board is past the age bound (<c>stale_boards</c>) or cannot be served (<c>missing_boards</c>). Still HTTP 200.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status3 Status { get; init; }

    [JsonPropertyName("version")]
    public required string Version { get; init; }

    [JsonPropertyName("boards")]
    public required IReadOnlyDictionary<string, Boards> Boards { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stale_boards")]
    public IReadOnlyList<string>? StaleBoards { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_board_age_s")]
    public double? MaxBoardAgeS { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("missing_boards")]
    public IReadOnlyList<string>? MissingBoards { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
