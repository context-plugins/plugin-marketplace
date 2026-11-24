using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Zillapi.Core.ErrorResponse;
using Zillapi.Core.Models;
using Zillapi.Models;

namespace Zillapi.Errors;

public sealed class GetJobResultsError : ApiError
{
    private readonly Optional<ApiErrorModel> _apiErrorModelValue;

    private GetJobResultsError(Optional<ApiErrorModel> apiErrorModelValue, Optional<RawError> fallback) : base(fallback)
    {
        _apiErrorModelValue = apiErrorModelValue;
    }

    private static GetJobResultsError AsApiErrorModel(ApiErrorModel value) =>
        new(Optional<ApiErrorModel>.Some(value), default);

    private static GetJobResultsError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value) =>
        _apiErrorModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiErrorModel, TResult> onApiErrorModel, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiErrorModel(out var apiErrorModelValue) => onApiErrorModel(apiErrorModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetJobResultsError)} holds no value.")
        };

    public void Match(Action<ApiErrorModel> onApiErrorModel, Action<RawError> otherwise)
    {
        if (TryGetApiErrorModel(out var apiErrorModelValue)) onApiErrorModel(apiErrorModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetJobResultsError)} holds no value.");
    }

    private static Task<GetJobResultsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 or 409 => response.Json<ApiErrorModel>().As(AsApiErrorModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetJobResultsError> Response { get; } = new(Create);
}
