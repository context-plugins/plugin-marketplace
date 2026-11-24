namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetDeveloperPlayDevelopersIdGet operation.
/// </summary>
public sealed record GetDeveloperPlayDevelopersIdGetRequest
{
    /// <summary>
    /// Developer ID
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Fields to return separated by comma(,)
    /// </summary>
    public string? Fields { get; init; }
}
