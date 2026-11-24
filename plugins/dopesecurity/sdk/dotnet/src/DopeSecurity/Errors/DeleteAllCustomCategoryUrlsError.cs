using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DopeSecurity.Core.ErrorResponse;
using DopeSecurity.Core.Models;
using DopeSecurity.Models;

namespace DopeSecurity.Errors;

public sealed class DeleteAllCustomCategoryUrlsError : ApiError
{
    private readonly Optional<ErrorsModel> _errorsModelValue;

    private DeleteAllCustomCategoryUrlsError(Optional<ErrorsModel> errorsModelValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorsModelValue = errorsModelValue;
    }

    private static DeleteAllCustomCategoryUrlsError AsErrorsModel(ErrorsModel value) =>
        new(Optional<ErrorsModel>.Some(value), default);

    private static DeleteAllCustomCategoryUrlsError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetErrorsModel([NotNullWhen(true)] out ErrorsModel? value) =>
        _errorsModelValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<ErrorsModel, TResult> onErrorsModel, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetErrorsModel(out var errorsModelValue) => onErrorsModel(errorsModelValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeleteAllCustomCategoryUrlsError)} holds no value.")
        };

    public void Match(Action<ErrorsModel> onErrorsModel, Action<RawError> otherwise)
    {
        if (TryGetErrorsModel(out var errorsModelValue)) onErrorsModel(errorsModelValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeleteAllCustomCategoryUrlsError)} holds no value.");
    }

    private static Task<DeleteAllCustomCategoryUrlsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 403 or 500 => response.Json<ErrorsModel>().As(AsErrorsModel),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteAllCustomCategoryUrlsError> Response { get; } = new(Create);
}
