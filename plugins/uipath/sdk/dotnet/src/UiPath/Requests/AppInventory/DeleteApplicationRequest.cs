namespace UiPath.Requests.AppInventory;

/// <summary>
/// The inputs of the DeleteApplication operation.
/// </summary>
public sealed record DeleteApplicationRequest
{
    /// <summary>
    /// Unique identifier of the application to delete
    /// </summary>
    public required int ApplicationId { get; init; }
}
