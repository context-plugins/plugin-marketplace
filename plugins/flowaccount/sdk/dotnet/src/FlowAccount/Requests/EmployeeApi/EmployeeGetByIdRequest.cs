namespace FlowAccount.Requests.EmployeeApi;

/// <summary>
/// The inputs of the EmployeeGetById operation.
/// </summary>
public sealed record EmployeeGetByIdRequest
{
    public required long Id { get; init; }
}
