namespace Givebutter.Requests.RecurringPlans;

/// <summary>
/// The inputs of the PlansIndex operation.
/// </summary>
public sealed record PlansIndexRequest
{
    public string? Contacts { get; init; }
}
