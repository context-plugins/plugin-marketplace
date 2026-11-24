namespace FlowAccount.Requests.EmployeeApi;

/// <summary>
/// The inputs of the EmployeeRemove operation.
/// </summary>
public sealed record EmployeeRemoveRequest
{
    public required long Id { get; init; }
}
