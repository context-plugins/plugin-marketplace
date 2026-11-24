using DoiT.Models.Enums;

namespace DoiT.Requests.Reports;

/// <summary>
/// The inputs of the GetAsyncOperationResults operation.
/// </summary>
public sealed record GetAsyncOperationResultsRequest
{
    /// <summary>
    /// The unique ID of the async operation.
    /// </summary>
    public required string OperationId { get; init; }

    /// <summary>
    /// Additionally render the operation's result as a file and return a signed URL to it in <c>fileOutput</c>. The file is generated from the result the operation already produced, not by re-running the query, and is stored beside that result for the operation's lifetime, so a repeat request for the same operation and format returns a fresh signed URL to the same file rather than rendering it again. Omit the parameter and the response is unchanged. Returns 422 when the operation predates file output support and has no stored render input; a transient rendering failure instead returns 200 with <c>result</c> and no <c>fileOutput</c>, so retry the request for the file. <c>pdf</c> is the chart and data table as a document, <c>png</c> the chart image, and <c>csv</c> every row of the result as raw data, one line per row with the report's dimensions and metrics, never truncated.
    /// </summary>
    public FileOutput? FileOutput { get; init; }
}
