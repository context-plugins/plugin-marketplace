using System.ComponentModel.DataAnnotations;

namespace Basiq.Requests.Connectors;

/// <summary>
/// The inputs of the GetConnector operation.
/// </summary>
public sealed record GetConnectorRequest
{
    /// <summary>
    /// Connector ID
    /// </summary>
    [RegularExpression("^[A-Z]{2}[0-9]{5}$")]
    public required string ConnectorId { get; init; }

    /// <summary>
    /// Connector method
    /// </summary>
    public required string Method { get; init; }
}
