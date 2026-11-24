using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Stoplight.Core.ErrorResponse;
using Stoplight.Core.Models;

namespace Stoplight.Errors;

public sealed class PostVersionsPublishAnonError : ApiError
{
    private readonly Optional<object> _anonymousObjectValue;

    private PostVersionsPublishAnonError(Optional<object> anonymousObjectValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _anonymousObjectValue = anonymousObjectValue;
    }

    private static PostVersionsPublishAnonError AsAnonymousObject(object value) =>
        new(Optional<object>.Some(value), default);

    private static PostVersionsPublishAnonError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetAnonymousObject([NotNullWhen(true)] out object? value) =>
        _anonymousObjectValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<object, TResult> onAnonymousObject, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetAnonymousObject(out var anonymousObjectValue) => onAnonymousObject(anonymousObjectValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostVersionsPublishAnonError)} holds no value.")
        };

    public void Match(Action<object> onAnonymousObject, Action<RawError> otherwise)
    {
        if (TryGetAnonymousObject(out var anonymousObjectValue)) onAnonymousObject(anonymousObjectValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostVersionsPublishAnonError)} holds no value.");
    }

    private static Task<PostVersionsPublishAnonError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 404 or 500 => response.Json<object>().As(AsAnonymousObject),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostVersionsPublishAnonError> Response { get; } = new(Create);
}
