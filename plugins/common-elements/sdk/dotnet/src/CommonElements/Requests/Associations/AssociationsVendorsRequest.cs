namespace CommonElements.Requests.Associations;

/// <summary>
/// The inputs of the AssociationsVendors operation.
/// </summary>
public sealed record AssociationsVendorsRequest
{
    /// <summary>
    /// Association UUID.
    /// </summary>
    public required string Id { get; init; }
}
