using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ClassifyDocument operation.
/// </summary>
public sealed record ClassifyDocumentOperationRequest
{
    public required XAmzTarget6 XAmzTarget { get; init; }
}
