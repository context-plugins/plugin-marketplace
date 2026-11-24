using DidLogic.Models;

namespace DidLogic.Requests.SmsApi;

/// <summary>
/// The inputs of the SmsCreate operation.
/// </summary>
public sealed record SmsCreateRequest
{
    public required ApiV1SmsRequest Body { get; init; }
}
