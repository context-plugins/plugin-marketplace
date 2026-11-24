using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Models;
using Deliverd.Models;

namespace Deliverd.Errors;

public sealed class PostApiV1GatesByIdCancelError : ApiError
{
    private readonly Optional<ApiV1GatesCancel403Error1> _apiV1GatesCancel403Error1Value;

    private readonly Optional<ApiV1GatesCancel409Error1> _apiV1GatesCancel409Error1Value;

    private PostApiV1GatesByIdCancelError(Optional<ApiV1GatesCancel403Error1> apiV1GatesCancel403Error1Value,
        Optional<ApiV1GatesCancel409Error1> apiV1GatesCancel409Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1GatesCancel403Error1Value = apiV1GatesCancel403Error1Value;
        _apiV1GatesCancel409Error1Value = apiV1GatesCancel409Error1Value;
    }

    private static PostApiV1GatesByIdCancelError AsApiV1GatesCancel403Error1(ApiV1GatesCancel403Error1 value) =>
        new(Optional<ApiV1GatesCancel403Error1>.Some(value), default, default);

    private static PostApiV1GatesByIdCancelError AsApiV1GatesCancel409Error1(ApiV1GatesCancel409Error1 value) =>
        new(default, Optional<ApiV1GatesCancel409Error1>.Some(value), default);

    private static PostApiV1GatesByIdCancelError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1GatesCancel403Error1([NotNullWhen(true)] out ApiV1GatesCancel403Error1? value) =>
        _apiV1GatesCancel403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1GatesCancel409Error1([NotNullWhen(true)] out ApiV1GatesCancel409Error1? value) =>
        _apiV1GatesCancel409Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1GatesCancel403Error1, TResult> onApiV1GatesCancel403Error1,
        Func<ApiV1GatesCancel409Error1, TResult> onApiV1GatesCancel409Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1GatesCancel403Error1(
                out var apiV1GatesCancel403Error1Value) => onApiV1GatesCancel403Error1(apiV1GatesCancel403Error1Value),
            _ when TryGetApiV1GatesCancel409Error1(
                out var apiV1GatesCancel409Error1Value) => onApiV1GatesCancel409Error1(apiV1GatesCancel409Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostApiV1GatesByIdCancelError)} holds no value.")
        };

    public void Match(Action<ApiV1GatesCancel403Error1> onApiV1GatesCancel403Error1,
        Action<ApiV1GatesCancel409Error1> onApiV1GatesCancel409Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1GatesCancel403Error1(out var apiV1GatesCancel403Error1Value)) onApiV1GatesCancel403Error1(
            apiV1GatesCancel403Error1Value);
        else if (TryGetApiV1GatesCancel409Error1(out var apiV1GatesCancel409Error1Value)) onApiV1GatesCancel409Error1(
            apiV1GatesCancel409Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostApiV1GatesByIdCancelError)} holds no value.");
    }

    private static Task<PostApiV1GatesByIdCancelError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV1GatesCancel403Error1>().As(AsApiV1GatesCancel403Error1),
            409 => response.Json<ApiV1GatesCancel409Error1>().As(AsApiV1GatesCancel409Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostApiV1GatesByIdCancelError> Response { get; } = new(Create);
}
