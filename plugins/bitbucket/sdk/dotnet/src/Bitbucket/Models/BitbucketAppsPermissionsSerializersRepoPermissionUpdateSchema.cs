using System.Text.Json.Serialization;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

public record BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema
{
    [JsonPropertyName("permission")]
    public required Permission2 Permission { get; init; }
}
