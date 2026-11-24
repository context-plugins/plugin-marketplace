namespace DidLogic.Requests.SmsApi;

/// <summary>
/// The inputs of the SmsShow operation.
/// </summary>
public sealed record SmsShowRequest
{
    /// <summary>
    /// SMS message id from sms_index, sms_create
    /// </summary>
    public required int Id { get; init; }
}
