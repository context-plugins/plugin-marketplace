using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Models;
using Deliverd.Models;

namespace Deliverd.Errors;

public sealed class PostApiV1PoliciesByIdActivateError : ApiError
{
    private readonly Optional<ApiV1PoliciesActivate403Error1> _apiV1PoliciesActivate403Error1Value;

    private readonly Optional<ApiV1PoliciesActivate404Error1> _apiV1PoliciesActivate404Error1Value;

    private readonly Optional<ApiV1PoliciesActivate409Error1> _apiV1PoliciesActivate409Error1Value;

    private PostApiV1PoliciesByIdActivateError(Optional<ApiV1PoliciesActivate403Error1> apiV1PoliciesActivate403Error1Value,
        Optional<ApiV1PoliciesActivate404Error1> apiV1PoliciesActivate404Error1Value,
        Optional<ApiV1PoliciesActivate409Error1> apiV1PoliciesActivate409Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1PoliciesActivate403Error1Value = apiV1PoliciesActivate403Error1Value;
        _apiV1PoliciesActivate404Error1Value = apiV1PoliciesActivate404Error1Value;
        _apiV1PoliciesActivate409Error1Value = apiV1PoliciesActivate409Error1Value;
    }

    private static PostApiV1PoliciesByIdActivateError AsApiV1PoliciesActivate403Error1(ApiV1PoliciesActivate403Error1 value) =>
        new(Optional<ApiV1PoliciesActivate403Error1>.Some(value), default, default, default);

    private static PostApiV1PoliciesByIdActivateError AsApiV1PoliciesActivate404Error1(ApiV1PoliciesActivate404Error1 value) =>
        new(default, Optional<ApiV1PoliciesActivate404Error1>.Some(value), default, default);

    private static PostApiV1PoliciesByIdActivateError AsApiV1PoliciesActivate409Error1(ApiV1PoliciesActivate409Error1 value) =>
        new(default, default, Optional<ApiV1PoliciesActivate409Error1>.Some(value), default);

    private static PostApiV1PoliciesByIdActivateError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1PoliciesActivate403Error1([NotNullWhen(true)] out ApiV1PoliciesActivate403Error1? value) =>
        _apiV1PoliciesActivate403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PoliciesActivate404Error1([NotNullWhen(true)] out ApiV1PoliciesActivate404Error1? value) =>
        _apiV1PoliciesActivate404Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PoliciesActivate409Error1([NotNullWhen(true)] out ApiV1PoliciesActivate409Error1? value) =>
        _apiV1PoliciesActivate409Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1PoliciesActivate403Error1, TResult> onApiV1PoliciesActivate403Error1,
        Func<ApiV1PoliciesActivate404Error1, TResult> onApiV1PoliciesActivate404Error1,
        Func<ApiV1PoliciesActivate409Error1, TResult> onApiV1PoliciesActivate409Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1PoliciesActivate403Error1(
                out var apiV1PoliciesActivate403Error1Value) => onApiV1PoliciesActivate403Error1(
                apiV1PoliciesActivate403Error1Value),
            _ when TryGetApiV1PoliciesActivate404Error1(
                out var apiV1PoliciesActivate404Error1Value) => onApiV1PoliciesActivate404Error1(
                apiV1PoliciesActivate404Error1Value),
            _ when TryGetApiV1PoliciesActivate409Error1(
                out var apiV1PoliciesActivate409Error1Value) => onApiV1PoliciesActivate409Error1(
                apiV1PoliciesActivate409Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostApiV1PoliciesByIdActivateError)} holds no value.")
        };

    public void Match(Action<ApiV1PoliciesActivate403Error1> onApiV1PoliciesActivate403Error1,
        Action<ApiV1PoliciesActivate404Error1> onApiV1PoliciesActivate404Error1,
        Action<ApiV1PoliciesActivate409Error1> onApiV1PoliciesActivate409Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1PoliciesActivate403Error1(
            out var apiV1PoliciesActivate403Error1Value)) onApiV1PoliciesActivate403Error1(
            apiV1PoliciesActivate403Error1Value);
        else if (TryGetApiV1PoliciesActivate404Error1(
            out var apiV1PoliciesActivate404Error1Value)) onApiV1PoliciesActivate404Error1(
            apiV1PoliciesActivate404Error1Value);
        else if (TryGetApiV1PoliciesActivate409Error1(
            out var apiV1PoliciesActivate409Error1Value)) onApiV1PoliciesActivate409Error1(
            apiV1PoliciesActivate409Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostApiV1PoliciesByIdActivateError)} holds no value.");
    }

    private static Task<PostApiV1PoliciesByIdActivateError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV1PoliciesActivate403Error1>().As(AsApiV1PoliciesActivate403Error1),
            404 => response.Json<ApiV1PoliciesActivate404Error1>().As(AsApiV1PoliciesActivate404Error1),
            409 => response.Json<ApiV1PoliciesActivate409Error1>().As(AsApiV1PoliciesActivate409Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostApiV1PoliciesByIdActivateError> Response { get; } = new(Create);
}
