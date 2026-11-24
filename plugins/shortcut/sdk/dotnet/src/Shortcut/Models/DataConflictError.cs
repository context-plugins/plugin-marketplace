using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Error returned when Datomic tx fails due to Datomc :db.error/cas-failed error
/// </summary>
public record DataConflictError
{
    [JsonPropertyName("error")]
    public string Error { get; } = "data-conflict-error";

    /// <summary>
    /// An explanatory message: "The update failed due to a data conflict. Please refresh and try again."
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }
}
