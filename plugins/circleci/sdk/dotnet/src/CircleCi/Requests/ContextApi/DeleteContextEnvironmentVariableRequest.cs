using System;

namespace CircleCi.Requests.ContextApi;

/// <summary>
/// The inputs of the DeleteContextEnvironmentVariable operation.
/// </summary>
public sealed record DeleteContextEnvironmentVariableRequest
{
    /// <summary>
    /// The unique identifier of the context
    /// </summary>
    public required Guid ContextId { get; init; }

    /// <summary>
    /// The name of the environment variable
    /// </summary>
    public required string EnvVarName { get; init; }
}
