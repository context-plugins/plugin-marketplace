using AmazonLex.Models;

namespace AmazonLex.Requests.Migrations;

/// <summary>
/// The inputs of the StartMigration operation.
/// </summary>
public sealed record StartMigrationOperationRequest
{
    public StartMigrationRequest? Body { get; init; }
}
