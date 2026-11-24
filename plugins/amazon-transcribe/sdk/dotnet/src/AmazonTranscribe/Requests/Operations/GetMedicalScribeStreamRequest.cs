namespace AmazonTranscribe.Requests.Operations;

/// <summary>
/// The inputs of the GetMedicalScribeStream operation.
/// </summary>
public sealed record GetMedicalScribeStreamRequest
{
    /// <summary>
    /// The identifier of the HealthScribe streaming session you want information about.
    /// </summary>
    public required string SessionId { get; init; }
}
