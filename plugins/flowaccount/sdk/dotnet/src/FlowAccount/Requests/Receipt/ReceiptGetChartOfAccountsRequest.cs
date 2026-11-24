namespace FlowAccount.Requests.Receipt;

/// <summary>
/// The inputs of the ReceiptGetChartOfAccounts operation.
/// </summary>
public sealed record ReceiptGetChartOfAccountsRequest
{
    public required string Culture { get; init; }
}
