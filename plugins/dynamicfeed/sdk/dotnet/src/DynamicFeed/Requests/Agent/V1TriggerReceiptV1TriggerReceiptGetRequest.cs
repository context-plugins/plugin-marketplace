namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1TriggerReceiptV1TriggerReceiptGet operation.
/// </summary>
public sealed record V1TriggerReceiptV1TriggerReceiptGetRequest
{
    public required string Metric { get; init; }

    public required double Threshold { get; init; }

    public string Op { get; init; } = "gte";

    public double? Lat { get; init; }

    public double? Lon { get; init; }

    public string? City { get; init; }

    public string? Peril { get; init; }

    public string? ContractRef { get; init; }

    public string? Methodology { get; init; }
}
