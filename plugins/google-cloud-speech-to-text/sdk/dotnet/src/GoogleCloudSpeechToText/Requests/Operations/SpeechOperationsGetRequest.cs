namespace GoogleCloudSpeechToText.Requests.Operations;

/// <summary>
/// The inputs of the SpeechOperationsGet operation.
/// </summary>
public sealed record SpeechOperationsGetRequest
{
    /// <summary>
    /// Resource name segment (operationsId).
    /// </summary>
    public required string OperationsId { get; init; }
}
