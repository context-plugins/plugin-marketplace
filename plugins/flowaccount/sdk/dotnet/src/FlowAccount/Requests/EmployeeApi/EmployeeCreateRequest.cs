using FlowAccount.Models;

namespace FlowAccount.Requests.EmployeeApi;

/// <summary>
/// The inputs of the EmployeeCreate operation.
/// </summary>
public sealed record EmployeeCreateRequest
{
    public required EmployeeModel Body { get; init; }
}
