namespace ApiVerve.Requests.Calendar;

/// <summary>
/// The inputs of the Workingdays operation.
/// </summary>
public sealed record WorkingdaysRequest
{
    /// <summary>
    /// The 2-letter country code you want to get the number of working days for
    /// </summary>
    public required string Country { get; init; }

    /// <summary>
    /// The month you want to get the number of working days for
    /// </summary>
    public int? Month { get; init; }

    /// <summary>
    /// The year you want to get the number of working days for
    /// </summary>
    public int? Year { get; init; }
}
