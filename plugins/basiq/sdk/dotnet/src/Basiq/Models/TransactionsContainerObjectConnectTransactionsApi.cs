using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// A transaction object is created whenever money is debited or credited from a particular account.
/// </summary>
public record TransactionsContainerObjectConnectTransactionsApi
{
    /// <summary>
    /// Value is "list".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Count of the transactions in the response.
    /// </summary>
    [JsonPropertyName("count")]
    public required long Count { get; init; }

    [JsonPropertyName("size")]
    public required long Size { get; init; }

    [JsonPropertyName("data")]
    public required IReadOnlyList<DatumConnectTransactionsApi> Data { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public Links1ConnectTransactionsApi? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
