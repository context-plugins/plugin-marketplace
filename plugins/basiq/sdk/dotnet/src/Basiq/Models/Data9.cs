using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

public record Data9
{
    /// <summary>
    /// Value is "transaction".
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// Uniquely identifies the transaction for this connection. Note that when a connection is refreshed pending transactions will receive new id's, whilst posted transactions will receive the same id's as before the refresh.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The id of the account resource the transaction belongs to.
    /// </summary>
    [JsonPropertyName("account")]
    public required string Account { get; init; }

    /// <summary>
    /// Transaction amount. Outgoing funds are expressed as negative values.
    /// </summary>
    [JsonPropertyName("amount")]
    public required string Amount { get; init; }

    /// <summary>
    /// Value of the account balance at time the transaction was completed.
    /// </summary>
    [JsonPropertyName("balance")]
    public required string Balance { get; init; }

    /// <summary>
    /// Describes the class(type) of transaction.
    /// </summary>
    [JsonPropertyName("class")]
    public required Class1ReportingReportsApi Class { get; init; }

    /// <summary>
    /// The id of the connection resource that was used to retrieve the transaction.
    /// </summary>
    [JsonPropertyName("connection")]
    public required string Connection { get; init; }

    /// <summary>
    /// The transaction description as submitted by the institution..
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// Identifies if the transaction is of debit or credit type.
    /// </summary>
    [JsonPropertyName("direction")]
    public required Direction Direction { get; init; }

    [JsonPropertyName("enrich")]
    public required Enrich Enrich { get; init; }

    /// <summary>
    /// The id of the institution resource the transaction originated from.
    /// </summary>
    [JsonPropertyName("institution")]
    public required string Institution { get; init; }

    /// <summary>
    /// Date the transaction was posted as provided by the institution (this is the same date that appears on a bank statement). This value is null if the record is pending. e.g. "2017-11-10T21:46:44Z" or 2017-11-10T00:00:00Z.
    /// </summary>
    [JsonPropertyName("postDate")]
    public required string PostDate { get; init; }

    /// <summary>
    /// Identifies if a transaction is pending or posted. A pending transaction is an approved debit or credit transaction that has not been fully processed yet (i.e. has not been posted). Find out more about pending transaction and how to deal with them within your app. Note that pending transactions are not available for all institutions.
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusReportingReportsApi Status { get; init; }

    /// <summary>
    /// Date that the user executed the transaction as provided by the institution. Note that not all transactions provide this value (varies by institution) e.g. "2017-11-10T00:00:00Z"
    /// </summary>
    [JsonPropertyName("transactionDate")]
    public required string TransactionDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
