using OddsRelay.Models.Enums;

namespace OddsRelay.Requests.Discovery;

/// <summary>
/// The inputs of the ListBookmakers operation.
/// </summary>
public sealed record ListBookmakersRequest
{
    /// <summary>
    /// <c>envelope</c> (default): <c>{meta, data}</c>. <c>bare</c>: the <c>data</c> array alone, <c>meta</c> moved to <c>X-*</c> headers.
    /// </summary>
    public Format Format { get; init; } = Format.Envelope;
}
