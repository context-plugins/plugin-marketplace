using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using ReadMe.Core.ErrorResponse;
using ReadMe.Core.Models;

namespace ReadMe.Errors;

public sealed class PostRequestError : ApiError
{
    private readonly Optional<RawError> _noContentValue;

    private PostRequestError(Optional<RawError> noContentValue, Optional<RawError> fallback) : base(fallback)
    {
        _noContentValue = noContentValue;
    }

    private static PostRequestError AsNoContent(RawError value) => new(Optional<RawError>.Some(value), default);

    private static PostRequestError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetNoContent([NotNullWhen(true)] out RawError? value) => _noContentValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<RawError, TResult> onNoContent, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetNoContent(out var noContentValue) => onNoContent(noContentValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostRequestError)} holds no value.")
        };

    public void Match(Action<RawError> onNoContent, Action<RawError> otherwise)
    {
        if (TryGetNoContent(out var noContentValue)) onNoContent(noContentValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostRequestError)} holds no value.");
    }

    private static Task<PostRequestError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 => response.RawBody().As(AsNoContent),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostRequestError> Response { get; } = new(Create);
}
