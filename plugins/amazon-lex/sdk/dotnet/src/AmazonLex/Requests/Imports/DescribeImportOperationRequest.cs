namespace AmazonLex.Requests.Imports;

/// <summary>
/// The inputs of the DescribeImport operation.
/// </summary>
public sealed record DescribeImportOperationRequest
{
    public required string ImportId { get; init; }
}
