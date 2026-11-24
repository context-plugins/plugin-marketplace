using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record DatasourceRoleContentDto
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createDatasets")]
    public bool? CreateDatasets { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deleteDatasource")]
    public bool? DeleteDatasource { get; init; }

    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("manageDatasourceSettings")]
    public bool? ManageDatasourceSettings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("managePermissions")]
    public bool? ManagePermissions { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("viewDatasource")]
    public bool? ViewDatasource { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
