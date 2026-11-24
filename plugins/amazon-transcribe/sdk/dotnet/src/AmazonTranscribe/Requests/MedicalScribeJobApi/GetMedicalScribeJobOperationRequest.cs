using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.MedicalScribeJobApi;

/// <summary>
/// The inputs of the GetMedicalScribeJob operation.
/// </summary>
public sealed record GetMedicalScribeJobOperationRequest
{
    public required XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApi XAmzTarget { get; init; }
}
