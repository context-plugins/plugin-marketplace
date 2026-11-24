using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Postscript.Core.ErrorResponse;
using Postscript.Core.Models;
using Postscript.Models;

namespace Postscript.Errors;

public sealed class GetSentMessageError : ApiError
{
    private readonly Optional<ApiV2SentMessages400Error1> _apiV2SentMessages400Error1Value;

    private GetSentMessageError(Optional<ApiV2SentMessages400Error1> apiV2SentMessages400Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV2SentMessages400Error1Value = apiV2SentMessages400Error1Value;
    }

    private static GetSentMessageError AsApiV2SentMessages400Error1(ApiV2SentMessages400Error1 value) =>
        new(Optional<ApiV2SentMessages400Error1>.Some(value), default);

    private static GetSentMessageError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV2SentMessages400Error1([NotNullWhen(true)] out ApiV2SentMessages400Error1? value) =>
        _apiV2SentMessages400Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV2SentMessages400Error1, TResult> onApiV2SentMessages400Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV2SentMessages400Error1(
                out var apiV2SentMessages400Error1Value) => onApiV2SentMessages400Error1(
                apiV2SentMessages400Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetSentMessageError)} holds no value.")
        };

    public void Match(Action<ApiV2SentMessages400Error1> onApiV2SentMessages400Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV2SentMessages400Error1(out var apiV2SentMessages400Error1Value)) onApiV2SentMessages400Error1(
            apiV2SentMessages400Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetSentMessageError)} holds no value.");
    }

    private static Task<GetSentMessageError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV2SentMessages400Error1>().As(AsApiV2SentMessages400Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetSentMessageError> Response { get; } = new(Create);
}
