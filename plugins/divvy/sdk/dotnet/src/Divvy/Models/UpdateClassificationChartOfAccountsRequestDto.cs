using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Update a chart of accounts (description updated)
/// </summary>
public record UpdateClassificationChartOfAccountsRequestDto
{
    /// <summary>
    /// Chart of accounts name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Chart of accounts description
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// BILL-generated ID of the parent chart of accounts. You can set this field if this chart of accounts is a child object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentId")]
    public string? ParentId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account")]
    public Account2? Account { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
