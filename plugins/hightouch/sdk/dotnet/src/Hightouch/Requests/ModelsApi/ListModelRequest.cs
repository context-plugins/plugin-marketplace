using System.Collections.Generic;
using Hightouch.Models.Enums;

namespace Hightouch.Requests.ModelsApi;

/// <summary>
/// The inputs of the ListModel operation.
/// </summary>
public sealed record ListModelRequest
{
    /// <summary>
    /// filter based on name
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// filter based on slug
    /// </summary>
    public string? Slug { get; init; }

    /// <summary>
    /// set the offset on results (for pagination)
    /// </summary>
    public double Offset { get; init; } = 0d;

    /// <summary>
    /// limit the number of objects returned (default is 100)
    /// </summary>
    public double Limit { get; init; } = 100d;

    /// <summary>
    /// specify the order
    /// </summary>
    public OrderByHightouchDestinationsApi OrderBy { get; init; } = OrderByHightouchDestinationsApi.Id;

    /// <summary>
    /// filter models based on tags (format: key:value), ex: team:marketing. Repeat this parameter for multiple tags.
    /// </summary>
    public IReadOnlyList<string>? Tags { get; init; }
}
