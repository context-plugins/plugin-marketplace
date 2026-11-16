using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using FinixApiReference.Core.ErrorResponse;
using FinixApiReference.Core.Models;
using FinixApiReference.Models;

namespace FinixApiReference.Errors;

public sealed class ListCurrentUsagesError : ApiError
{
    private readonly Optional<GenericError> _genericErrorValue;

    private ListCurrentUsagesError(Optional<GenericError> genericErrorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _genericErrorValue = genericErrorValue;
    }

    private static ListCurrentUsagesError AsGenericError(GenericError value) =>
        new(Optional<GenericError>.Some(value), default);

    private static ListCurrentUsagesError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetGenericError([NotNullWhen(true)] out GenericError? value) =>
        _genericErrorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<GenericError, TResult> onGenericError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetGenericError(out var genericErrorValue) => onGenericError(genericErrorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ListCurrentUsagesError)} holds no value.")
        };

    public void Match(Action<GenericError> onGenericError, Action<RawError> otherwise)
    {
        if (TryGetGenericError(out var genericErrorValue)) onGenericError(genericErrorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ListCurrentUsagesError)} holds no value.");
    }

    private static Task<ListCurrentUsagesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 403 or 406 or 422 => response.Json<GenericError>().As(AsGenericError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ListCurrentUsagesError> Response { get; } = new(Create);
}
