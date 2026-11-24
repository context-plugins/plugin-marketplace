namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Sudoku operation.
/// </summary>
public sealed record SudokuRequest
{
    /// <summary>
    /// The difficulty level of the Sudoku puzzle to generate
    /// </summary>
    public string? Difficulty { get; init; }
}
