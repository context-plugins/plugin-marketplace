using Zillapi.Models;

namespace Zillapi.Requests.Properties;

/// <summary>
/// The inputs of the CreateBatchPropertyJob operation.
/// </summary>
public sealed record CreateBatchPropertyJobRequest
{
    public required BatchPropertyRequest Body { get; init; }
}
