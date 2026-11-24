using PlinthUsGrantsData.Models;

namespace PlinthUsGrantsData.Requests.Sql;

/// <summary>
/// The inputs of the RunSql operation.
/// </summary>
public sealed record RunSqlRequest
{
    public required ApiSqlRequest Body { get; init; }
}
