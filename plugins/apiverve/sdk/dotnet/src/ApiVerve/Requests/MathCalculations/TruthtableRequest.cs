namespace ApiVerve.Requests.MathCalculations;

/// <summary>
/// The inputs of the Truthtable operation.
/// </summary>
public sealed record TruthtableRequest
{
    /// <summary>
    /// Boolean expression using A-Z variables and operators (AND, OR, NOT, XOR, NAND, NOR)
    /// </summary>
    public required string Expression { get; init; }
}
