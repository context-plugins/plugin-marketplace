namespace ApiVerve.Requests.Calendar;

/// <summary>
/// The inputs of the Agecalculator operation.
/// </summary>
public sealed record AgecalculatorRequest
{
    /// <summary>
    /// The date of birth to calculate the age from (format: YYYY-MM-DD)
    /// </summary>
    public required string Dob { get; init; }

    /// <summary>
    /// IANA timezone used to interpret the date of birth and to determine "today" when computing the age
    /// </summary>
    public string? Timezone { get; init; }
}
