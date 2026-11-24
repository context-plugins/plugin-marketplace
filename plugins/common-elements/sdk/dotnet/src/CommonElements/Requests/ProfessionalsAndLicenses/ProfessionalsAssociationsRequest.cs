namespace CommonElements.Requests.ProfessionalsAndLicenses;

/// <summary>
/// The inputs of the ProfessionalsAssociations operation.
/// </summary>
public sealed record ProfessionalsAssociationsRequest
{
    /// <summary>
    /// License record UUID, from the search endpoint.
    /// </summary>
    public required string Id { get; init; }
}
