namespace ApiVerve.Requests.HealthWellness;

/// <summary>
/// The inputs of the Exercises operation.
/// </summary>
public sealed record ExercisesRequest
{
    /// <summary>
    /// The muscle group to get exercises for
    /// </summary>
    public required string Muscle { get; init; }

    /// <summary>
    /// The name of the exercise to get information about
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// The equipment used for the exercise
    /// </summary>
    public string? Equipment { get; init; }
}
