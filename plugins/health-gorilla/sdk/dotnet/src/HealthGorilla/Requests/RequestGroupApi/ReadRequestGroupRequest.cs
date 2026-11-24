namespace HealthGorilla.Requests.RequestGroupApi;

/// <summary>
/// The inputs of the ReadRequestGroup operation.
/// </summary>
public sealed record ReadRequestGroupRequest
{
    /// <summary>
    /// The logical id of the resource.
    /// </summary>
    public required string Id { get; init; }
}
