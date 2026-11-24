using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record ProgramManagementAccountsStatusResponse
{
    [JsonPropertyName("items")]
    public required IReadOnlyList<ProgramManagementAccountStatus> Items { get; init; }
}
