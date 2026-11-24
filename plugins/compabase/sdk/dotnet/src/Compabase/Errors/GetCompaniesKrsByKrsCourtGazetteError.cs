using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Compabase.Core.ErrorResponse;
using Compabase.Core.Models;
using Compabase.Models;

namespace Compabase.Errors;

public sealed class GetCompaniesKrsByKrsCourtGazetteError : ApiError
{
    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private GetCompaniesKrsByKrsCourtGazetteError(Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorResponseModelValue = errorResponseModelValue;
    }

    private static GetCompaniesKrsByKrsCourtGazetteError AsErrorResponseModel(ErrorResponseModel value) =>
        new(Optional<ErrorResponseModel>.Some(value), default);

    private static GetCompaniesKrsByKrsCourtGazetteError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value) =>
        _errorResponseModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorResponseModel, TResult> onErrorResponseModel,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorResponseModel(out var errorResponseModelValue) => onErrorResponseModel(
                errorResponseModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetCompaniesKrsByKrsCourtGazetteError)} holds no value.")
        };

    public void Match(Action<ErrorResponseModel> onErrorResponseModel, Action<RawError> otherwise)
    {
        if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(errorResponseModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetCompaniesKrsByKrsCourtGazetteError)} holds no value.");
    }

    private static Task<GetCompaniesKrsByKrsCourtGazetteError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 404 or 429 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetCompaniesKrsByKrsCourtGazetteError> Response { get; } = new(Create);
}
