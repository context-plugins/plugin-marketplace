using FinixApiReference.Core.Validation.Attributes;

namespace FinixApiReference.Requests.PaymentInstrumentsApi;

/// <summary>
/// The inputs of the ListInstrumentHistoryEntries operation.
/// </summary>
public sealed record ListInstrumentHistoryEntriesRequest
{
    /// <summary>
    /// The <c>Payment Instrument</c> that triggered the creation of this <c>Instrument History Entry</c>.
    /// </summary>
    public required string PaymentInstrumentId { get; init; }

    /// <summary>
    /// Return every resource created after the cursor value.
    /// </summary>
    public string? AfterCursor { get; init; }

    /// <summary>
    /// Return every resource created before the cursor value.
    /// </summary>
    public string? BeforeCursor { get; init; }

    /// <summary>
    /// The numbers of items to return.
    /// </summary>
    [Maximum(100)]
    public int? Limit { get; init; }

    /// <summary>
    /// Specify the API version of your request. For more details, see <see href="../../../../additional-resources/developers/authentication-and-api-basics/versioning">Versioning</see>.
    /// </summary>
    public string FinixVersion { get; init; } = "2022-02-01";
}
