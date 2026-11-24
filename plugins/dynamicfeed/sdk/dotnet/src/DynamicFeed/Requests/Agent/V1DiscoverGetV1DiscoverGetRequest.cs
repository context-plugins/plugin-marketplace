using System.ComponentModel.DataAnnotations;
using DynamicFeed.Core.Validation.Attributes;

namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1DiscoverGetV1DiscoverGet operation.
/// </summary>
public sealed record V1DiscoverGetV1DiscoverGetRequest
{
    [MaxLength(300)]
    public string Need { get; init; } = "";

    [Minimum(1)]
    [Maximum(20)]
    public int Limit { get; init; } = 8;

    public int External { get; init; } = 1;
}
