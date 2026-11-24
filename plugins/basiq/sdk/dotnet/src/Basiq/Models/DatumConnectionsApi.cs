using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record DatumConnectionsApi
{
    /// <summary>
    /// Type, always "connection".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Connection identification.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// method identification.
    /// </summary>
    [JsonPropertyName("method")]
    public required string Method { get; init; }

    /// <summary>
    /// Connection status, available only for SERVER_SCOPE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusConnectionsApi? Status { get; init; }

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
    /// Connection last used date, available only for SERVER_SCOPE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUsed")]
    public string? LastUsed { get; init; }

    /// <summary>
    /// Institution details.
    /// </summary>
    [JsonPropertyName("institution")]
    public required ConnectionInstitution Institution { get; init; }

    /// <summary>
    /// Object containing links to resources.
    /// </summary>
    [JsonPropertyName("links")]
    public required GetConnectionsLinks Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
