using System;

namespace Soda.Requests.Contracts;

/// <summary>
/// The inputs of the GetApiV1ContractsContractIdVersions operation.
/// </summary>
public sealed record GetApiV1ContractsContractIdVersionsRequest
{
    public required string ContractId { get; init; }

    public DateTimeOffset? CreatedBefore { get; init; }

    public int? Page { get; init; }

    public int? Size { get; init; }
}
