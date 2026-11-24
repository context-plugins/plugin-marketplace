using PlinthUsGrantsData.Models;

namespace PlinthUsGrantsData.Requests.Sql;

/// <summary>
/// The inputs of the PostApiV1Sql operation.
/// </summary>
public sealed record PostApiV1SqlRequest
{
    public required ApiV1SqlRequest Body { get; init; }
}
