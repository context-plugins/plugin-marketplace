using CallNode.Models.Enums;

namespace CallNode.Requests.Faxes;

/// <summary>
/// The inputs of the DownloadFax operation.
/// </summary>
public sealed record DownloadFaxRequest
{
    public required string Id { get; init; }

    public Format Format { get; init; } = Format.Pdf;
}
