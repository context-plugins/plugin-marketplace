using ApiVerve.Models;

namespace ApiVerve.Requests.DataProcessing;

/// <summary>
/// The inputs of the Sqlexplainer operation.
/// </summary>
public sealed record SqlexplainerRequest
{
    public required V1SqlexplainerRequest Body { get; init; }
}
