namespace MrScraper.Requests.Tasks;

/// <summary>
/// The inputs of the GetTasksById operation.
/// </summary>
public sealed record GetTasksByIdRequest
{
    /// <summary>
    /// Task ID
    /// </summary>
    public required int Id { get; init; }

    /// <summary>
    /// Use json to decode the result body and include available callbackStatus/callbackError fields
    /// </summary>
    public string? Result { get; init; }
}
