using System.ComponentModel.DataAnnotations;
using DevCycle.Models;

namespace DevCycle.Requests.BucketingApi;

/// <summary>
/// The inputs of the GetVariableByKey operation.
/// </summary>
public sealed record GetVariableByKeyRequest
{
    /// <summary>
    /// Variable key
    /// </summary>
    [RegularExpression("^[a-z0-9-_.]+$")]
    public required string Key { get; init; }

    public required UserData Body { get; init; }
}
