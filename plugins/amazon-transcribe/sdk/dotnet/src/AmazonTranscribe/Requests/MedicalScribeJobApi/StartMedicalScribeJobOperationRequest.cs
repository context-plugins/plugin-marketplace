using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.MedicalScribeJobApi;

/// <summary>
/// The inputs of the StartMedicalScribeJob operation.
/// </summary>
public sealed record StartMedicalScribeJobOperationRequest
{
    public required XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApi XAmzTarget { get; init; }
}
