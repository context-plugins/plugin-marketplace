using Lili.Models;

namespace Lili.Requests;

/// <summary>
/// The inputs of the UploadAdditionalDoc operation.
/// </summary>
public sealed record UploadAdditionalDocRequest
{
    public required string CustomerId { get; init; }

    public LeadUpload? Body { get; init; }
}
