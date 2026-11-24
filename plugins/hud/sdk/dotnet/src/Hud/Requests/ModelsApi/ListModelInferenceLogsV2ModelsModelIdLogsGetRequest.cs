using System;
using Hud.Core.Validation.Attributes;

namespace Hud.Requests.ModelsApi;

/// <summary>
/// The inputs of the ListModelInferenceLogsV2ModelsModelIdLogsGet operation.
/// </summary>
public sealed record ListModelInferenceLogsV2ModelsModelIdLogsGetRequest
{
    public required Guid ModelId { get; init; }

    [Minimum(1)]
    [Maximum(200)]
    public int Limit { get; init; } = 50;

    [Minimum(0)]
    [Maximum(2147483647)]
    public int Offset { get; init; } = 0;
}
