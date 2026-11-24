namespace CommonElements.Requests.ProfessionalsAndLicenses;

/// <summary>
/// The inputs of the ProfessionalsDetail operation.
/// </summary>
public sealed record ProfessionalsDetailRequest
{
    /// <summary>
    /// License record UUID, from the search endpoint.
    /// </summary>
    public required string Id { get; init; }
}
