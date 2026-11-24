namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Openlicenses operation.
/// </summary>
public sealed record OpenlicensesRequest
{
    /// <summary>
    /// The name of the open source license to get information about
    /// </summary>
    public required string Name { get; init; }
}
