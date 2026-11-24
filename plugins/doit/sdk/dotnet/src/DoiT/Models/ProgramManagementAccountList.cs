using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record ProgramManagementAccountList
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<ProgramManagementAccount> Items { get; init; }

    /// <summary>
    /// Opaque cursor for the next page. Absent when this is the last page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageToken")]
    public string? PageToken { get; init; }

    [JsonPropertyName("rowCount")]
    public required int RowCount { get; init; }
}
