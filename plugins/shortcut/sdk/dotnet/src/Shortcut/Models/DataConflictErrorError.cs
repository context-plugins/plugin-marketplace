using System.Text.Json.Serialization;
using Shortcut.Core.Models;

namespace Shortcut.Models;

/// <summary>
/// Error returned when Datomic tx fails due to Datomc :db.error/cas-failed error
/// </summary>
public record DataConflictErrorError
{
    [JsonPropertyName("error")]
    public string Error { get; } = "data-conflict-error";

    /// <summary>
    /// An explanatory message: "The update failed due to a data conflict. Please refresh and try again."
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
