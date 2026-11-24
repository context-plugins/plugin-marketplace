using System.ComponentModel.DataAnnotations;
using Divvy.Models.Enums;

namespace Divvy.Requests.NetworkApi;

/// <summary>
/// The inputs of the Search operation.
/// </summary>
public sealed record SearchRequest
{
    [MinLength(1)]
    public required string Name { get; init; }

    public ScopeType? Scope { get; init; }

    public string? ZipOrPostalCode { get; init; }

    public string? AccountNumber { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
