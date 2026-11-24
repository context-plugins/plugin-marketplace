using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Operations;

/// <summary>
/// The inputs of the DetectProtectiveEquipment operation.
/// </summary>
public sealed record DetectProtectiveEquipmentOperationRequest
{
    public required XAmzTarget6 XAmzTarget { get; init; }
}
