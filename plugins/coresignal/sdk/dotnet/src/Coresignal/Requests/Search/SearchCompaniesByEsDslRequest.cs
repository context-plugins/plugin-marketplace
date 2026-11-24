namespace Coresignal.Requests.Search;

/// <summary>
/// The inputs of the SearchCompaniesByEsDsl operation.
/// </summary>
public sealed record SearchCompaniesByEsDslRequest
{
    public required object Body { get; init; }
}
