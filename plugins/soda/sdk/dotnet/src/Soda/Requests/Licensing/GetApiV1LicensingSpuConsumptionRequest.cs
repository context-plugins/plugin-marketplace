using System;

namespace Soda.Requests.Licensing;

/// <summary>
/// The inputs of the GetApiV1LicensingSpuConsumption operation.
/// </summary>
public sealed record GetApiV1LicensingSpuConsumptionRequest
{
    public DateTimeOffset? From { get; init; }

    public DateTimeOffset? To { get; init; }
}
