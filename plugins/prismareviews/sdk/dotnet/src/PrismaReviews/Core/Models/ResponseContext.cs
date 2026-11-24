using System;
using System.Net.Http;

namespace PrismaReviews.Core.Models;

internal readonly record struct ResponseContext(
    HttpResponseMessage Response,
    CallContext Call,
    TimeProvider Clock,
    TimeSpan? StreamReadTimeout);

internal sealed class ResponseContextFactory
{
    private readonly TimeProvider _clock;
    private readonly TimeSpan? _streamReadTimeout;

    public ResponseContextFactory(TimeProvider clock, TimeSpan? streamReadTimeout)
    {
        _clock = clock;
        _streamReadTimeout = streamReadTimeout;
    }

    public ResponseContext Create(HttpResponseMessage response, CallContext call) =>
        new(response, call, _clock, _streamReadTimeout);
}
