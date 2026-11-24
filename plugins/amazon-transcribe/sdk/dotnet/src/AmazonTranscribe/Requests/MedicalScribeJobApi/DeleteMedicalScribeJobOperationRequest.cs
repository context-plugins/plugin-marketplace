using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.MedicalScribeJobApi;

/// <summary>
/// The inputs of the DeleteMedicalScribeJob operation.
/// </summary>
public sealed record DeleteMedicalScribeJobOperationRequest
{
    public required XAmzTargetAmazonTranscribeServiceMedicalScribeJobApi XAmzTarget { get; init; }
}
