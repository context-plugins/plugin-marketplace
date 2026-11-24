using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record UsersExpensesRequest
{
    /// <summary>
    /// The list of accounts to be included in the expenses otherwise all the user accounts will be included in the summary
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accounts")]
    public IReadOnlyList<string>? Accounts { get; init; }

    /// <summary>
    /// The first/start month to be included in the expense output e.g. "fromMonth":"2019-05". Resulting expenses resource will be based on data between fromMonth and toMonth.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fromMonth")]
    public string? FromMonth { get; init; }

    /// <summary>
    /// The last/end month to be included in the expense output e.g. "toMonth":"2019-09". Resulting expenses resource will be based on data between fromMonth and toMonth.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("toMonth")]
    public string? ToMonth { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
