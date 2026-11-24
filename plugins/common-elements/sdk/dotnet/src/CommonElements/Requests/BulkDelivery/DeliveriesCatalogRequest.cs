namespace CommonElements.Requests.BulkDelivery;

/// <summary>
/// The inputs of the DeliveriesCatalog operation.
/// </summary>
public sealed record DeliveriesCatalogRequest
{
    /// <summary>
    /// Narrow to one dataset and include its full column dictionary. Without it the response carries column counts rather than every column. Current keys: associations, vendors, statutes, building-safety, report-card, changes.
    /// </summary>
    public string? Dataset { get; init; }
}
