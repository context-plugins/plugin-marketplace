using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Deliverd.Core.ErrorResponse;
using Deliverd.Core.Models;
using Deliverd.Models;

namespace Deliverd.Errors;

public sealed class PostApiV1GatesByIdExecutionError : ApiError
{
    private readonly Optional<ApiV1GatesExecution403Error1> _apiV1GatesExecution403Error1Value;

    private readonly Optional<ApiV1GatesExecution409Error1> _apiV1GatesExecution409Error1Value;

    private PostApiV1GatesByIdExecutionError(Optional<ApiV1GatesExecution403Error1> apiV1GatesExecution403Error1Value,
        Optional<ApiV1GatesExecution409Error1> apiV1GatesExecution409Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiV1GatesExecution403Error1Value = apiV1GatesExecution403Error1Value;
        _apiV1GatesExecution409Error1Value = apiV1GatesExecution409Error1Value;
    }

    private static PostApiV1GatesByIdExecutionError AsApiV1GatesExecution403Error1(ApiV1GatesExecution403Error1 value) =>
        new(Optional<ApiV1GatesExecution403Error1>.Some(value), default, default);

    private static PostApiV1GatesByIdExecutionError AsApiV1GatesExecution409Error1(ApiV1GatesExecution409Error1 value) =>
        new(default, Optional<ApiV1GatesExecution409Error1>.Some(value), default);

    private static PostApiV1GatesByIdExecutionError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiV1GatesExecution403Error1([NotNullWhen(true)] out ApiV1GatesExecution403Error1? value) =>
        _apiV1GatesExecution403Error1Value.TryGetValue(out value);

    public bool TryGetApiV1GatesExecution409Error1([NotNullWhen(true)] out ApiV1GatesExecution409Error1? value) =>
        _apiV1GatesExecution409Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiV1GatesExecution403Error1, TResult> onApiV1GatesExecution403Error1,
        Func<ApiV1GatesExecution409Error1, TResult> onApiV1GatesExecution409Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiV1GatesExecution403Error1(
                out var apiV1GatesExecution403Error1Value) => onApiV1GatesExecution403Error1(
                apiV1GatesExecution403Error1Value),
            _ when TryGetApiV1GatesExecution409Error1(
                out var apiV1GatesExecution409Error1Value) => onApiV1GatesExecution409Error1(
                apiV1GatesExecution409Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostApiV1GatesByIdExecutionError)} holds no value.")
        };

    public void Match(Action<ApiV1GatesExecution403Error1> onApiV1GatesExecution403Error1,
        Action<ApiV1GatesExecution409Error1> onApiV1GatesExecution409Error1,
        Action<RawError> otherwise)
    {
        if (TryGetApiV1GatesExecution403Error1(
            out var apiV1GatesExecution403Error1Value)) onApiV1GatesExecution403Error1(
            apiV1GatesExecution403Error1Value);
        else if (TryGetApiV1GatesExecution409Error1(
            out var apiV1GatesExecution409Error1Value)) onApiV1GatesExecution409Error1(
            apiV1GatesExecution409Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostApiV1GatesByIdExecutionError)} holds no value.");
    }

    private static Task<PostApiV1GatesByIdExecutionError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 => response.Json<ApiV1GatesExecution403Error1>().As(AsApiV1GatesExecution403Error1),
            409 => response.Json<ApiV1GatesExecution409Error1>().As(AsApiV1GatesExecution409Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostApiV1GatesByIdExecutionError> Response { get; } = new(Create);
}
