using Soda.Models;

namespace Soda.Requests.DataStandards;

/// <summary>
/// The inputs of the PostApiV1DataStandards operation.
/// </summary>
public sealed record PostApiV1DataStandardsRequest
{
    public required PublicApiDataStandardRequestDto Body { get; init; }
}
