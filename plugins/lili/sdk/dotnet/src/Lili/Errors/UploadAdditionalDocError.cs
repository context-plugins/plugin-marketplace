using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Lili.Core.ErrorResponse;
using Lili.Core.Models;

namespace Lili.Errors;

public sealed class UploadAdditionalDocError : ApiError
{
    private readonly Optional<object> _anonymousObjectValue;

    private UploadAdditionalDocError(Optional<object> anonymousObjectValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _anonymousObjectValue = anonymousObjectValue;
    }

    private static UploadAdditionalDocError AsAnonymousObject(object value) =>
        new(Optional<object>.Some(value), default);

    private static UploadAdditionalDocError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<object, TResult> onAnonymousObject, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(UploadAdditionalDocError)} holds no value.")
        };

    public void Match(Action<object> onAnonymousObject, Action<RawError> otherwise)
    {
        if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(UploadAdditionalDocError)} holds no value.");
    }

    private static Task<UploadAdditionalDocError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<object>().As(AsAnonymousObject),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<UploadAdditionalDocError> Response { get; } = new(Create);
}
