using System.Text.Json.Serialization;
using FlowAccount.Models.Enums;

namespace FlowAccount.Models;

public record FilterOptions
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columnName")]
    public string? ColumnName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columnValue")]
    public string? ColumnValue { get; init; }

    /// <summary>
    /// 0 = Or
    /// 1 = And
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columnPredicateOperator")]
    public PredicateOperator? ColumnPredicateOperator { get; init; }
}
