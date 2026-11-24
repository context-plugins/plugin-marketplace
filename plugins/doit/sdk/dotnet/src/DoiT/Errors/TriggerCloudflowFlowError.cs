using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DoiT.Core.ErrorResponse;
using DoiT.Core.Models;
using DoiT.Models;

namespace DoiT.Errors;

public sealed class TriggerCloudflowFlowError : ApiError
{
    private readonly Optional<CloudflowV1FlowsActionsTrigger409Error1> _cloudflowV1FlowsActionsTrigger409Error1Value;

    private readonly Optional<Error> _errorValue;

    private readonly Optional<ProblemDetails> _problemDetailsValue;

    private TriggerCloudflowFlowError(Optional<CloudflowV1FlowsActionsTrigger409Error1> cloudflowV1FlowsActionsTrigger409Error1Value,
        Optional<Error> errorValue,
        Optional<ProblemDetails> problemDetailsValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _cloudflowV1FlowsActionsTrigger409Error1Value = cloudflowV1FlowsActionsTrigger409Error1Value;
        _errorValue = errorValue;
        _problemDetailsValue = problemDetailsValue;
    }

    private static TriggerCloudflowFlowError AsCloudflowV1FlowsActionsTrigger409Error1(CloudflowV1FlowsActionsTrigger409Error1 value) =>
        new(Optional<CloudflowV1FlowsActionsTrigger409Error1>.Some(value), default, default, default);

    private static TriggerCloudflowFlowError AsError(Error value) =>
        new(default, Optional<Error>.Some(value), default, default);

    private static TriggerCloudflowFlowError AsProblemDetails(ProblemDetails value) =>
        new(default, default, Optional<ProblemDetails>.Some(value), default);

    private static TriggerCloudflowFlowError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetCloudflowV1FlowsActionsTrigger409Error1([NotNullWhen(true)] out CloudflowV1FlowsActionsTrigger409Error1? value) =>
        _cloudflowV1FlowsActionsTrigger409Error1Value.TryGetValue(out value);

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public bool TryGetProblemDetails([NotNullWhen(true)] out ProblemDetails? value) =>
        _problemDetailsValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<CloudflowV1FlowsActionsTrigger409Error1, TResult> onCloudflowV1FlowsActionsTrigger409Error1,
        Func<Error, TResult> onError,
        Func<ProblemDetails, TResult> onProblemDetails,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetCloudflowV1FlowsActionsTrigger409Error1(
                out var cloudflowV1FlowsActionsTrigger409Error1Value) => onCloudflowV1FlowsActionsTrigger409Error1(
                cloudflowV1FlowsActionsTrigger409Error1Value),
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetProblemDetails(out var problemDetailsValue) => onProblemDetails(problemDetailsValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(TriggerCloudflowFlowError)} holds no value.")
        };

    public void Match(Action<CloudflowV1FlowsActionsTrigger409Error1> onCloudflowV1FlowsActionsTrigger409Error1,
        Action<Error> onError,
        Action<ProblemDetails> onProblemDetails,
        Action<RawError> otherwise)
    {
        if (TryGetCloudflowV1FlowsActionsTrigger409Error1(
            out var cloudflowV1FlowsActionsTrigger409Error1Value)) onCloudflowV1FlowsActionsTrigger409Error1(
            cloudflowV1FlowsActionsTrigger409Error1Value);
        else if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetProblemDetails(out var problemDetailsValue)) onProblemDetails(problemDetailsValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(TriggerCloudflowFlowError)} holds no value.");
    }

    private static Task<TriggerCloudflowFlowError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 404 or 422 or 500 => response.Json<ProblemDetails>().As(AsProblemDetails),
            409 => response.Json<CloudflowV1FlowsActionsTrigger409Error1>().As(
                AsCloudflowV1FlowsActionsTrigger409Error1),
            429 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<TriggerCloudflowFlowError> Response { get; } = new(Create);
}
