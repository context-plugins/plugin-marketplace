using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Models;
using Deliverd.Models;

namespace Deliverd.Errors;

public sealed class PostApiV1PoliciesByIdVersionsError : ApiError
{
    private readonly Optional<ApiV1PoliciesVersions400Error1> _apiV1PoliciesVersions400Error1Value;

    private readonly Optional<ApiV1PoliciesVersions403Error1> _apiV1PoliciesVersions403Error1Value;

    private readonly Optional<ApiV1PoliciesVersions404Error1> _apiV1PoliciesVersions404Error1Value;

    private PostApiV1PoliciesByIdVersionsError(Optional<ApiV1PoliciesVersions400Error1> apiV1PoliciesVersions400Error1Value,
        Optional<ApiV1PoliciesVersions403Error1> apiV1PoliciesVersions403Error1Value,
        Optional<ApiV1PoliciesVersions404Error1> apiV1PoliciesVersions404Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1PoliciesVersions400Error1Value = apiV1PoliciesVersions400Error1Value;
        _apiV1PoliciesVersions403Error1Value = apiV1PoliciesVersions403Error1Value;
        _apiV1PoliciesVersions404Error1Value = apiV1PoliciesVersions404Error1Value;
    }

    private static PostApiV1PoliciesByIdVersionsError AsApiV1PoliciesVersions400Error1(ApiV1PoliciesVersions400Error1 value) =>
        new(Optional<ApiV1PoliciesVersions400Error1>.Some(value), default, default, default);

    private static PostApiV1PoliciesByIdVersionsError AsApiV1PoliciesVersions403Error1(ApiV1PoliciesVersions403Error1 value) =>
        new(default, Optional<ApiV1PoliciesVersions403Error1>.Some(value), default, default);

    private static PostApiV1PoliciesByIdVersionsError AsApiV1PoliciesVersions404Error1(ApiV1PoliciesVersions404Error1 value) =>
        new(default, default, Optional<ApiV1PoliciesVersions404Error1>.Some(value), default);

    private static PostApiV1PoliciesByIdVersionsError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1PoliciesVersions400Error1([NotNullWhen(true)] out ApiV1PoliciesVersions400Error1? value) =>
        _apiV1PoliciesVersions400Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PoliciesVersions403Error1([NotNullWhen(true)] out ApiV1PoliciesVersions403Error1? value) =>
        _apiV1PoliciesVersions403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1PoliciesVersions404Error1([NotNullWhen(true)] out ApiV1PoliciesVersions404Error1? value) =>
        _apiV1PoliciesVersions404Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1PoliciesVersions400Error1, TResult> onApiV1PoliciesVersions400Error1,
        Func<ApiV1PoliciesVersions403Error1, TResult> onApiV1PoliciesVersions403Error1,
        Func<ApiV1PoliciesVersions404Error1, TResult> onApiV1PoliciesVersions404Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1PoliciesVersions400Error1(
                out var apiV1PoliciesVersions400Error1Value) => onApiV1PoliciesVersions400Error1(
                apiV1PoliciesVersions400Error1Value),
            _ when TryGetApiV1PoliciesVersions403Error1(
                out var apiV1PoliciesVersions403Error1Value) => onApiV1PoliciesVersions403Error1(
                apiV1PoliciesVersions403Error1Value),
            _ when TryGetApiV1PoliciesVersions404Error1(
                out var apiV1PoliciesVersions404Error1Value) => onApiV1PoliciesVersions404Error1(
                apiV1PoliciesVersions404Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostApiV1PoliciesByIdVersionsError)} holds no value.")
        };

    public void Match(Action<ApiV1PoliciesVersions400Error1> onApiV1PoliciesVersions400Error1,
        Action<ApiV1PoliciesVersions403Error1> onApiV1PoliciesVersions403Error1,
        Action<ApiV1PoliciesVersions404Error1> onApiV1PoliciesVersions404Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1PoliciesVersions400Error1(
            out var apiV1PoliciesVersions400Error1Value)) onApiV1PoliciesVersions400Error1(
            apiV1PoliciesVersions400Error1Value);
        else if (TryGetApiV1PoliciesVersions403Error1(
            out var apiV1PoliciesVersions403Error1Value)) onApiV1PoliciesVersions403Error1(
            apiV1PoliciesVersions403Error1Value);
        else if (TryGetApiV1PoliciesVersions404Error1(
            out var apiV1PoliciesVersions404Error1Value)) onApiV1PoliciesVersions404Error1(
            apiV1PoliciesVersions404Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostApiV1PoliciesByIdVersionsError)} holds no value.");
    }

    private static Task<PostApiV1PoliciesByIdVersionsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<ApiV1PoliciesVersions400Error1>().As(AsApiV1PoliciesVersions400Error1),
            403 => response.Json<ApiV1PoliciesVersions403Error1>().As(AsApiV1PoliciesVersions403Error1),
            404 => response.Json<ApiV1PoliciesVersions404Error1>().As(AsApiV1PoliciesVersions404Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostApiV1PoliciesByIdVersionsError> Response { get; } = new(Create);
}
