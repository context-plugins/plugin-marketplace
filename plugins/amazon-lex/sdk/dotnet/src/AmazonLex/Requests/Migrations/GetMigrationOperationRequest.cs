namespace AmazonLex.Requests.Migrations;

/// <summary>
/// The inputs of the GetMigration operation.
/// </summary>
public sealed record GetMigrationOperationRequest
{
    public required string MigrationId { get; init; }
}
