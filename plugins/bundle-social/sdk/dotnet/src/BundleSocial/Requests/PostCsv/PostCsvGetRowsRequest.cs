using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.PostCsv;

/// <summary>
/// The inputs of the PostCsvGetRows operation.
/// </summary>
public sealed record PostCsvGetRowsRequest
{
    public required string ImportId { get; init; }

    public Status4BundleSocialPostCsvApi? Status { get; init; }

    public double? Offset { get; init; } = 0d;

    public double? Limit { get; init; } = 10d;
}
