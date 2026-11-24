using Hud.Models;

namespace Hud.Requests.Traces;

/// <summary>
/// The inputs of the BatchValidateTracesV2TraceBatchValidatePost operation.
/// </summary>
public sealed record BatchValidateTracesV2TraceBatchValidatePostRequest
{
    public required TraceBatchValidateRequest Body { get; init; }
}
