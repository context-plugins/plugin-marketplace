using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record UpdateFileSystemAssociationInput
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the file system association that you want to update.
    /// </summary>
    [JsonPropertyName("FileSystemAssociationARN")]
    public required string FileSystemAssociationArn { get; init; }

    /// <summary>
    /// The user name of the user credential that has permission to access the root share D$ of the Amazon FSx file system. The user account must belong to the Amazon FSx delegated admin user group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UserName")]
    public string? UserName { get; init; }

    /// <summary>
    /// The password of the user credential.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Password")]
    public string? Password { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the storage used for the audit logs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AuditDestinationARN")]
    public string? AuditDestinationArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CacheAttributes")]
    public CacheAttributes? CacheAttributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
