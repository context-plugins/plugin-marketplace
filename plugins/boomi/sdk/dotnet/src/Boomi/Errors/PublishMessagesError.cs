using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Boomi.Core.ErrorResponse;
using Boomi.Core.Models;
using Boomi.Models;

namespace Boomi.Errors;

public sealed class PublishMessagesError : ApiError
{
    private readonly Optional<ErrorResponseBoomiEventStreamsRestMessagesApi> _errorResponseBoomiEventStreamsRestMessagesApiValue;

    private readonly Optional<RawError> _noContentValue;

    private PublishMessagesError(Optional<ErrorResponseBoomiEventStreamsRestMessagesApi> errorResponseBoomiEventStreamsRestMessagesApiValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseBoomiEventStreamsRestMessagesApiValue = errorResponseBoomiEventStreamsRestMessagesApiValue;
        _noContentValue = noContentValue;
    }

    private static PublishMessagesError AsErrorResponseBoomiEventStreamsRestMessagesApi(ErrorResponseBoomiEventStreamsRestMessagesApi value) =>
        new(Optional<ErrorResponseBoomiEventStreamsRestMessagesApi>.Some(value), default, default);

    private static PublishMessagesError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default);

    private static PublishMessagesError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseBoomiEventStreamsRestMessagesApi([NotNullWhen(true)] out ErrorResponseBoomiEventStreamsRestMessagesApi? value) =>
        _errorResponseBoomiEventStreamsRestMessagesApiValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseBoomiEventStreamsRestMessagesApi, TResult> onErrorResponseBoomiEventStreamsRestMessagesApi,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseBoomiEventStreamsRestMessagesApi(
                out var errorResponseBoomiEventStreamsRestMessagesApiValue) => onErrorResponseBoomiEventStreamsRestMessagesApi(
                errorResponseBoomiEventStreamsRestMessagesApiValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PublishMessagesError)} holds no value.")
        };

    public void Match(Action<ErrorResponseBoomiEventStreamsRestMessagesApi> onErrorResponseBoomiEventStreamsRestMessagesApi,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetErrorResponseBoomiEventStreamsRestMessagesApi(
            out var errorResponseBoomiEventStreamsRestMessagesApiValue)) onErrorResponseBoomiEventStreamsRestMessagesApi(
            errorResponseBoomiEventStreamsRestMessagesApiValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PublishMessagesError)} holds no value.");
    }

    private static Task<PublishMessagesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 => response.Json<ErrorResponseBoomiEventStreamsRestMessagesApi>().As(
                AsErrorResponseBoomiEventStreamsRestMessagesApi),
            413 or 429 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PublishMessagesError> Response { get; } = new(Create);
}
