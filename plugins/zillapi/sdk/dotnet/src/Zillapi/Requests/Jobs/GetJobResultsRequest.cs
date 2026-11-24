using System;
using Zillapi.Core.Validation.Attributes;
using Zillapi.Models.Enums;

namespace Zillapi.Requests.Jobs;

/// <summary>
/// The inputs of the GetJobResults operation.
/// </summary>
public sealed record GetJobResultsRequest
{
    /// <summary>
    /// Job UUID.
    /// </summary>
    public required Guid Id { get; init; }

    /// <summary>
    /// Page size (max 1000).
    /// </summary>
    [Maximum(1000)]
    public int Limit { get; init; } = 100;

    /// <summary>
    /// Pagination offset (unbounded).
    /// </summary>
    public int Offset { get; init; } = 0;

    /// <summary>
    /// Response format.
    /// </summary>
    public Format Format { get; init; } = Format.Json;
}
