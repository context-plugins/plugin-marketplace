using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Models;
using Deliverd.Models;

namespace Deliverd.Errors;

public sealed class PostApiV1GatesError : ApiError
{
    private readonly Optional<ApiV1Gates423Error1> _apiV1Gates423Error1Value;

    private PostApiV1GatesError(Optional<ApiV1Gates423Error1> apiV1Gates423Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Gates423Error1Value = apiV1Gates423Error1Value;
    }

    private static PostApiV1GatesError AsApiV1Gates423Error1(ApiV1Gates423Error1 value) =>
        new(Optional<ApiV1Gates423Error1>.Some(value), default);

    private static PostApiV1GatesError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV1Gates423Error1([NotNullWhen(true)] out ApiV1Gates423Error1? value) =>
        _apiV1Gates423Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Gates423Error1, TResult> onApiV1Gates423Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Gates423Error1(out var apiV1Gates423Error1Value) => onApiV1Gates423Error1(
                apiV1Gates423Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostApiV1GatesError)} holds no value.")
        };

    public void Match(Action<ApiV1Gates423Error1> onApiV1Gates423Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV1Gates423Error1(out var apiV1Gates423Error1Value)) onApiV1Gates423Error1(
            apiV1Gates423Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostApiV1GatesError)} holds no value.");
    }

    private static Task<PostApiV1GatesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            423 => response.Json<ApiV1Gates423Error1>().As(AsApiV1Gates423Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostApiV1GatesError> Response { get; } = new(Create);
}
