using System.Collections.Generic;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;
using Givebutter.Models.AnyOf;

namespace Givebutter.Models;

public record V1TransactionsResponse
{
    [JsonPropertyName("data")]
    public required IReadOnlyList<TransactionResource2> Data { get; init; }

    [JsonPropertyName("links")]
    public required Links Links { get; init; }

    [JsonPropertyName("meta")]
    public required MetaGivebutterApiDocumentationTransactionsApi Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
