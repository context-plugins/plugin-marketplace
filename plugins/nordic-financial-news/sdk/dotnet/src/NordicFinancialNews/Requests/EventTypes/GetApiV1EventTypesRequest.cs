namespace NordicFinancialNews.Requests.EventTypes;

/// <summary>
/// The inputs of the GetApiV1EventTypes operation.
/// </summary>
public sealed record GetApiV1EventTypesRequest
{
    /// <summary>
    /// Comma-separated list of fields to include. Available fields: <c>id</c>, <c>slug</c>, <c>label</c>, <c>category</c>, <c>summary</c>. <c>id</c> is always included.
    /// </summary>
    public string? Fields { get; init; }
}
