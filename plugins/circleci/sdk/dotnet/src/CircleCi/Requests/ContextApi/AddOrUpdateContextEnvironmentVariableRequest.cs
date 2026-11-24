using System;
using CircleCi.Models;

namespace CircleCi.Requests.ContextApi;

/// <summary>
/// The inputs of the AddOrUpdateContextEnvironmentVariable operation.
/// </summary>
public sealed record AddOrUpdateContextEnvironmentVariableRequest
{
    /// <summary>
    /// The unique identifier of the context
    /// </summary>
    public required Guid ContextId { get; init; }

    /// <summary>
    /// The name of the environment variable
    /// </summary>
    public required string EnvVarName { get; init; }

    public required ContextEnvironmentVariableRequest Body { get; init; }
}
