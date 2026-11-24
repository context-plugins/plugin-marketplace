using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Lusha.Core.ErrorResponse;
using Lusha.Core.Models;
using Lusha.Models;

namespace Lusha.Errors;

public sealed class GetContactLookalikesError : ApiError
{
    private readonly Optional<DedupeSessionInvalidError> _dedupeSessionInvalidErrorValue;

    private readonly Optional<ErrorResponseModel> _errorResponseModelValue;

    private readonly Optional<RawError> _noContentValue;

    private GetContactLookalikesError(Optional<DedupeSessionInvalidError> dedupeSessionInvalidErrorValue,
        Optional<ErrorResponseModel> errorResponseModelValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _dedupeSessionInvalidErrorValue = dedupeSessionInvalidErrorValue;
        _errorResponseModelValue = errorResponseModelValue;
        _noContentValue = noContentValue;
    }

    private static GetContactLookalikesError AsDedupeSessionInvalidError(DedupeSessionInvalidError value) =>
        new(Optional<DedupeSessionInvalidError>.Some(value), default, default, default);

    private static GetContactLookalikesError AsErrorResponseModel(ErrorResponseModel value) =>
        new(default, Optional<ErrorResponseModel>.Some(value), default, default);

    private static GetContactLookalikesError AsNoContent(RawError value) =>
        new(default, default, Optional<RawError>.Some(value), default);

    private static GetContactLookalikesError AsFallback(RawError value) =>
        new(default, default, default, Optional<RawError>.Some(value));

    public bool TryGetDedupeSessionInvalidError([NotNullWhen(true)] out DedupeSessionInvalidError? value) =>
        _dedupeSessionInvalidErrorValue.TryGetValue(out value);

    public bool TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value) =>
        _errorResponseModelValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<DedupeSessionInvalidError, TResult> onDedupeSessionInvalidError,
        Func<ErrorResponseModel, TResult> onErrorResponseModel,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDedupeSessionInvalidError(
                out var dedupeSessionInvalidErrorValue) => onDedupeSessionInvalidError(dedupeSessionInvalidErrorValue),
            _ when TryGetErrorResponseModel(out var errorResponseModelValue) => onErrorResponseModel(
                errorResponseModelValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetContactLookalikesError)} holds no value.")
        };

    public void Match(Action<DedupeSessionInvalidError> onDedupeSessionInvalidError,
        Action<ErrorResponseModel> onErrorResponseModel,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetDedupeSessionInvalidError(out var dedupeSessionInvalidErrorValue)) onDedupeSessionInvalidError(
            dedupeSessionInvalidErrorValue);
        else if (TryGetErrorResponseModel(out var errorResponseModelValue)) onErrorResponseModel(
            errorResponseModelValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetContactLookalikesError)} holds no value.");
    }

    private static Task<GetContactLookalikesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 403 or 500 => response.Json<ErrorResponseModel>().As(AsErrorResponseModel),
            402 => response.RawBody().As(AsNoContent),
            410 => response.Json<DedupeSessionInvalidError>().As(AsDedupeSessionInvalidError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetContactLookalikesError> Response { get; } = new(Create);
}
