using Fillo.Models;

namespace Fillo.Requests.Deliveries;

/// <summary>
/// The inputs of the RedeliverFormResponses operation.
/// </summary>
public sealed record RedeliverFormResponsesRequest
{
    /// <summary>
    /// A form id or slug.
    /// </summary>
    public required string Form { get; init; }

    public required ApiV1ManageFormsDeliveriesRedeliverRequest Body { get; init; }
}
