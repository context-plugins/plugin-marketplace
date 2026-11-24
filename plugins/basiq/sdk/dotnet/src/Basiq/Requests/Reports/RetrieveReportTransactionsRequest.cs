namespace Basiq.Requests.Reports;

/// <summary>
/// The inputs of the RetrieveReportTransactions operation.
/// </summary>
public sealed record RetrieveReportTransactionsRequest
{
    /// <summary>
    /// The ID of the generated report
    /// </summary>
    public required string ReportId { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>account.id.eq('15a28893-e8c9-4441-a076-470195218738')</description></item>
    ///   <item><description>transaction.postDate.bt('2022-10-01,2022-10-10')</description></item>
    ///   <item><description>transaction.postDate.(eq|gt|lt|gteq|lteq)('2022-12-03T00:00:00Z')</description></item>
    ///   <item><description>institution.id.eq('AU00001')</description></item>
    ///   <item><description>connection.id.eq('12857a4c-931d-4a5a-ab74-399dafb03bfe')</description></item>
    ///   <item><description>transaction.id.eq('14198297-b3b5-415c-b6ad-8a14476ef61c')</description></item>
    ///   <item><description>transaction.direction.eq('credit')</description></item>
    ///   <item><description>transaction.class.eq('transfer')</description></item>
    ///   <item><description>transaction.status.eq('posted')</description></item>
    /// </list>
    /// <para>
    /// Transactions can be filtered based on date &amp; datetime.
    /// </para>
    /// </summary>
    public string? Filter { get; init; }
}
