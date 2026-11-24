using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Models;
using Deliverd.Models;

namespace Deliverd.Errors;

public sealed class PostApiV1PoliciesError : ApiError
{
    private readonly Optional<ApiV1Policies400Error1> _apiV1Policies400Error1Value;

    private readonly Optional<ApiV1Policies403Error1> _apiV1Policies403Error1Value;

    private readonly Optional<ApiV1Policies409Error1> _apiV1Policies409Error1Value;

    private PostApiV1PoliciesError(Optional<ApiV1Policies400Error1> apiV1Policies400Error1Value,
        Optional<ApiV1Policies403Error1> apiV1Policies403Error1Value,
        Optional<ApiV1Policies409Error1> apiV1Policies409Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1Policies400Error1Value = apiV1Policies400Error1Value;
        _apiV1Policies403Error1Value = apiV1Policies403Error1Value;
        _apiV1Policies409Error1Value = apiV1Policies409Error1Value;
    }

    private static PostApiV1PoliciesError AsApiV1Policies400Error1(ApiV1Policies400Error1 value) =>
        new(Optional<ApiV1Policies400Error1>.Some(value), default, default, default);

    private static PostApiV1PoliciesError AsApiV1Policies403Error1(ApiV1Policies403Error1 value) =>
        new(default, Optional<ApiV1Policies403Error1>.Some(value), default, default);

    private static PostApiV1PoliciesError AsApiV1Policies409Error1(ApiV1Policies409Error1 value) =>
        new(default, default, Optional<ApiV1Policies409Error1>.Some(value), default);

    private static PostApiV1PoliciesError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1Policies400Error1([NotNullWhen(true)] out ApiV1Policies400Error1? value) =>
        _apiV1Policies400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Policies403Error1([NotNullWhen(true)] out ApiV1Policies403Error1? value) =>
        _apiV1Policies403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1Policies409Error1([NotNullWhen(true)] out ApiV1Policies409Error1? value) =>
        _apiV1Policies409Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1Policies400Error1, TResult> onApiV1Policies400Error1,
        Func<ApiV1Policies403Error1, TResult> onApiV1Policies403Error1,
        Func<ApiV1Policies409Error1, TResult> onApiV1Policies409Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1Policies400Error1(out var apiV1Policies400Error1Value) => onApiV1Policies400Error1(
                apiV1Policies400Error1Value),
            _ when TryGetApiV1Policies403Error1(out var apiV1Policies403Error1Value) => onApiV1Policies403Error1(
                apiV1Policies403Error1Value),
            _ when TryGetApiV1Policies409Error1(out var apiV1Policies409Error1Value) => onApiV1Policies409Error1(
                apiV1Policies409Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostApiV1PoliciesError)} holds no value.")
        };

    public void Match(Action<ApiV1Policies400Error1> onApiV1Policies400Error1,
        Action<ApiV1Policies403Error1> onApiV1Policies403Error1,
        Action<ApiV1Policies409Error1> onApiV1Policies409Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1Policies400Error1(out var apiV1Policies400Error1Value)) onApiV1Policies400Error1(
            apiV1Policies400Error1Value);
        else if (TryGetApiV1Policies403Error1(out var apiV1Policies403Error1Value)) onApiV1Policies403Error1(
            apiV1Policies403Error1Value);
        else if (TryGetApiV1Policies409Error1(out var apiV1Policies409Error1Value)) onApiV1Policies409Error1(
            apiV1Policies409Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostApiV1PoliciesError)} holds no value.");
    }

    private static Task<PostApiV1PoliciesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1Policies400Error1>().As(AsApiV1Policies400Error1),
            403 => response.Json<ApiV1Policies403Error1>().As(AsApiV1Policies403Error1),
            409 => response.Json<ApiV1Policies409Error1>().As(AsApiV1Policies409Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostApiV1PoliciesError> Response { get; } = new(Create);
}
