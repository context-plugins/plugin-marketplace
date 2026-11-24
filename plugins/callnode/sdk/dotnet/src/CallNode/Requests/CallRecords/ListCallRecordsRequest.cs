using System;
using CallNode.Core.Validation.Attributes;
using CallNode.Models.Enums;

namespace CallNode.Requests.CallRecords;

/// <summary>
/// The inputs of the ListCallRecords operation.
/// </summary>
public sealed record ListCallRecordsRequest
{
    /// <summary>
    /// Limit to one of your numbers — E.164 or the number's id.
    /// </summary>
    public string? Number { get; init; }

    public Direction? Direction { get; init; }

    public Status? Status { get; init; }

    /// <summary>
    /// Only calls starting at or after this instant.
    /// </summary>
    public DateTimeOffset? Since { get; init; }

    /// <summary>
    /// Only calls starting at or before this instant.
    /// </summary>
    public DateTimeOffset? Until { get; init; }

    /// <summary>
    /// Keyset cursor — pass the previous page's <c>nextBefore</c>.
    /// </summary>
    public DateTimeOffset? Before { get; init; }

    [Minimum(1)]
    [Maximum(200)]
    public int Limit { get; init; } = 50;
}
