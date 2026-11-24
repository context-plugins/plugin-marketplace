namespace AppstoreSpy.Requests.AppStore;

/// <summary>
/// The inputs of the GetDeveloperIosDevelopersIdGet operation.
/// </summary>
public sealed record GetDeveloperIosDevelopersIdGetRequest
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
