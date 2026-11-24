using System.Text.Json.Serialization;
using GoogleCloudBuild.Core.Models;

namespace GoogleCloudBuild.Models;

/// <summary>
/// Message for creating a Repository.
/// </summary>
public record CreateRepositoryRequest
{
    /// <summary>
    /// Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&amp;'()*+,;=@.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("repositoryId")]
    public string? RepositoryId { get; init; }

    /// <summary>
    /// Required. The connection to contain the repository. If the request is part of a BatchCreateRepositoriesRequest, this field should be empty or match the parent specified there.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent")]
    public string? Parent { get; init; }

    /// <summary>
    /// Required. The repository to create.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("repository")]
    public Repository1? Repository { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
