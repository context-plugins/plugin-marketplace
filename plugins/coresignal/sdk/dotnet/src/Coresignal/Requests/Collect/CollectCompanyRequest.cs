namespace Coresignal.Requests.Collect;

/// <summary>
/// The inputs of the CollectCompany operation.
/// </summary>
public sealed record CollectCompanyRequest
{
    /// <summary>
    /// Coresignal internal company ID
    /// </summary>
    public required long Id { get; init; }
}
