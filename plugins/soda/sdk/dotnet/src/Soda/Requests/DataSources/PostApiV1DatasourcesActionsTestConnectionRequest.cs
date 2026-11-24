using Soda.Models;

namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the PostApiV1DatasourcesActionsTestConnection operation.
/// </summary>
public sealed record PostApiV1DatasourcesActionsTestConnectionRequest
{
    public required PublicApiTestConnectionRequestDto Body { get; init; }
}
