using System.Text.Json.Serialization;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

public record BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema
{
    [JsonPropertyName("permission")]
    public required Permission Permission { get; init; }
}
