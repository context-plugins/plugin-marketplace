using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

/// <summary>
/// Object containing details for connection post.
/// </summary>
public record ConnectionGetResponseResource
{
    /// <summary>
    /// Type, always "connection".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// A string that uniquely identifies the user connection.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// A string that uniquely identifies the user connections either it is web or openbanking
    /// </summary>
    [JsonPropertyName("method")]
    public required string Method { get; init; }

    /// <summary>
    /// Created date of the connection, available only for SERVER_SCOPE.
    /// </summary>
    [JsonPropertyName("createdDate")]
    public required string CreatedDate { get; init; }

    /// <summary>
    /// Expiry date of the connection.This date is only set for open-banking connections.
    /// <para>
    /// For web connections, the expiry date field will be empty.
    /// </para>
    /// </summary>
    [JsonPropertyName("expiryDate")]
    public required string ExpiryDate { get; init; }

    /// <summary>
    /// UTC Date and Time of when the connection was last used, in RFC 3339 format, available only for SERVER_SCOPE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUsed")]
    public string? LastUsed { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accounts")]
    public Accounts? Accounts { get; init; }

    /// <summary>
    /// Institution details.
    /// </summary>
    [JsonPropertyName("institution")]
    public required ConnectionInstitution Institution { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("profile")]
    public Profile? Profile { get; init; }

    /// <summary>
    /// Indicates the connection status, available only for SERVER_SCOPE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status2? Status { get; init; }

    /// <summary>
    /// Object containing links to resources.
    /// </summary>
    [JsonPropertyName("links")]
    public required GetConnectionLinks Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
