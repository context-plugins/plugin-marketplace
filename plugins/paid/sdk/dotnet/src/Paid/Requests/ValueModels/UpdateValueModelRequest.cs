using Paid.Models;

namespace Paid.Requests.ValueModels;

/// <summary>
/// The inputs of the UpdateValueModel operation.
/// </summary>
public sealed record UpdateValueModelRequest
{
    /// <summary>
    /// API Key authentication using Bearer token
    /// </summary>
    public required string Authorization { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ValueModelUploadRequest? Body { get; init; }
}
