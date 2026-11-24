namespace FlowAccount.Requests.ContactApi;

/// <summary>
/// The inputs of the ContactUploadContactQrCode operation.
/// </summary>
public sealed record ContactUploadContactQrCodeRequest
{
    public required long ContactId { get; init; }

    public required string Culture { get; init; }
}
