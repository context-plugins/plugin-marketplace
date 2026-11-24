using FlowAccount.Models;

namespace FlowAccount.Requests.EmployeeApi;

/// <summary>
/// The inputs of the EmployeeEdit operation.
/// </summary>
public sealed record EmployeeEditRequest
{
    public required EmployeeModel Body { get; init; }
}
