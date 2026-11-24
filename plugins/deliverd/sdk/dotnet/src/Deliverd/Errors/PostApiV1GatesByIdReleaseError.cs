using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Models;
using Deliverd.Models;

namespace Deliverd.Errors;

public sealed class PostApiV1GatesByIdReleaseError : ApiError
{
    private readonly Optional<ApiV1GatesRelease403Error1> _apiV1GatesRelease403Error1Value;

    private PostApiV1GatesByIdReleaseError(Optional<ApiV1GatesRelease403Error1> apiV1GatesRelease403Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1GatesRelease403Error1Value = apiV1GatesRelease403Error1Value;
    }

    private static PostApiV1GatesByIdReleaseError AsApiV1GatesRelease403Error1(ApiV1GatesRelease403Error1 value) =>
        new(Optional<ApiV1GatesRelease403Error1>.Some(value), default);

    private static PostApiV1GatesByIdReleaseError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetApiV1GatesRelease403Error1([NotNullWhen(true)] out ApiV1GatesRelease403Error1? value) =>
        _apiV1GatesRelease403Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1GatesRelease403Error1, TResult> onApiV1GatesRelease403Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1GatesRelease403Error1(
                out var apiV1GatesRelease403Error1Value) => onApiV1GatesRelease403Error1(
                apiV1GatesRelease403Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostApiV1GatesByIdReleaseError)} holds no value.")
        };

    public void Match(Action<ApiV1GatesRelease403Error1> onApiV1GatesRelease403Error1, Action<RawError> otherwise)
    {
        if (TryGetApiV1GatesRelease403Error1(out var apiV1GatesRelease403Error1Value)) onApiV1GatesRelease403Error1(
            apiV1GatesRelease403Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostApiV1GatesByIdReleaseError)} holds no value.");
    }

    private static Task<PostApiV1GatesByIdReleaseError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV1GatesRelease403Error1>().As(AsApiV1GatesRelease403Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostApiV1GatesByIdReleaseError> Response { get; } = new(Create);
}
