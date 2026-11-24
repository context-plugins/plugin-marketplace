using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Shortcut.Core.ErrorResponse;
using Shortcut.Core.Models;
using Shortcut.Models;

namespace Shortcut.Errors;

public sealed class UpdateCustomFieldError : ApiError
{
    private readonly Optional<DataConflictError> _dataConflictErrorValue;

    private readonly Optional<RawError> _noContentValue;

    private UpdateCustomFieldError(Optional<DataConflictError> dataConflictErrorValue,
        Optional<RawError> noContentValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _dataConflictErrorValue = dataConflictErrorValue;
        _noContentValue = noContentValue;
    }

    private static UpdateCustomFieldError AsDataConflictError(DataConflictError value) =>
        new(Optional<DataConflictError>.Some(value), default, default);

    private static UpdateCustomFieldError AsNoContent(RawError value) =>
        new(default, Optional<RawError>.Some(value), default);

    private static UpdateCustomFieldError AsFallback(RawError value) =>
        new(default, default, Optional<RawError>.Some(value));

    public bool TryGetDataConflictError([NotNullWhen(true)] out DataConflictError? value) =>
        _dataConflictErrorValue.TryGetValue(out value);

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<DataConflictError, TResult> onDataConflictError,
        Func<RawError, TResult> onNoContent,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetDataConflictError(out var dataConflictErrorValue) => onDataConflictError(
                dataConflictErrorValue),
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UpdateCustomFieldError)} holds no value.")
        };

    public void Match(Action<DataConflictError> onDataConflictError,
        Action<RawError> onNoContent,
        Action<RawError> otherwise)
    {
        if (TryGetDataConflictError(out var dataConflictErrorValue)) onDataConflictError(dataConflictErrorValue);
        else if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UpdateCustomFieldError)} holds no value.");
    }

    private static Task<UpdateCustomFieldError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 404 or 422 => response.RawBody().As(AsNoContent),
            409 => response.Json<DataConflictError>().As(AsDataConflictError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UpdateCustomFieldError> Response { get; } = new(Create);
}
