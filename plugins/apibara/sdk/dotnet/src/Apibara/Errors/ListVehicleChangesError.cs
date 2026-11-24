using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Apibara.Core.ErrorResponse;
using Apibara.Core.Models;
using Apibara.Models;

namespace Apibara.Errors;

public sealed class ListVehicleChangesError : ApiError
{
    private readonly Optional<ApiErrorModel> _apiErrorModelValue;

    private readonly Optional<ChangeCursorExpiredResponse> _changeCursorExpiredResponseValue;

    private ListVehicleChangesError(Optional<ApiErrorModel> apiErrorModelValue,
        Optional<ChangeCursorExpiredResponse> changeCursorExpiredResponseValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _apiErrorModelValue = apiErrorModelValue;
        _changeCursorExpiredResponseValue = changeCursorExpiredResponseValue;
    }

    private static ListVehicleChangesError AsApiErrorModel(ApiErrorModel value) =>
        new(Optional<ApiErrorModel>.Some(value), default, default);

    private static ListVehicleChangesError AsChangeCursorExpiredResponse(ChangeCursorExpiredResponse value) =>
        new(default, Optional<ChangeCursorExpiredResponse>.Some(value), default);

    private static ListVehicleChangesError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value) =>
        _apiErrorModelValue.TryGetValue(out value);

    public bool TryGetChangeCursorExpiredResponse([NotNullWhen(true)] out ChangeCursorExpiredResponse? value) =>
        _changeCursorExpiredResponseValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ApiErrorModel, TResult> onApiErrorModel,
        Func<ChangeCursorExpiredResponse, TResult> onChangeCursorExpiredResponse,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetApiErrorModel(out var apiErrorModelValue) => onApiErrorModel(apiErrorModelValue),
            _ when TryGetChangeCursorExpiredResponse(
                out var changeCursorExpiredResponseValue) => onChangeCursorExpiredResponse(
                changeCursorExpiredResponseValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListVehicleChangesError)} holds no value.")
        };

    public void Match(Action<ApiErrorModel> onApiErrorModel,
        Action<ChangeCursorExpiredResponse> onChangeCursorExpiredResponse,
        Action<RawError> otherwise)
    {
        if (TryGetApiErrorModel(out var apiErrorModelValue)) onApiErrorModel(apiErrorModelValue);
        else if (TryGetChangeCursorExpiredResponse(
            out var changeCursorExpiredResponseValue)) onChangeCursorExpiredResponse(changeCursorExpiredResponseValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListVehicleChangesError)} holds no value.");
    }

    private static Task<ListVehicleChangesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 or 422 => response.Json<ApiErrorModel>().As(AsApiErrorModel),
            410 => response.Json<ChangeCursorExpiredResponse>().As(AsChangeCursorExpiredResponse),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListVehicleChangesError> Response { get; } = new(Create);
}
