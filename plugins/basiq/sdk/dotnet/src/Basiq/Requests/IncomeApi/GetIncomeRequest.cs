namespace Basiq.Requests.IncomeApi;

/// <summary>
/// The inputs of the GetIncome operation.
/// </summary>
public sealed record GetIncomeRequest
{
    /// <summary>
    /// The identifier of the user.
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// The identifier of the income summary to be retrieved.
    /// </summary>
    public required string SnapshotId { get; init; }
}
