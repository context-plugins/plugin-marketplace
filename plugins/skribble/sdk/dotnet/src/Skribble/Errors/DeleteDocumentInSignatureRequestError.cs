using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Skribble.Core.ErrorResponse;
using Skribble.Core.Models;
using Skribble.Models;

namespace Skribble.Errors;

public sealed class DeleteDocumentInSignatureRequestError : ApiError
{
    private readonly Optional<Problem> _problemValue;

    private DeleteDocumentInSignatureRequestError(Optional<Problem> problemValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _problemValue = problemValue;
    }

    private static DeleteDocumentInSignatureRequestError AsProblem(Problem value) =>
        new(Optional<Problem>.Some(value), default);

    private static DeleteDocumentInSignatureRequestError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetProblem([NotNullWhen(true)] out Problem? value) => _problemValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Problem, TResult> onProblem, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetProblem(out var problemValue) => onProblem(problemValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeleteDocumentInSignatureRequestError)} holds no value.")
        };

    public void Match(Action<Problem> onProblem, Action<RawError> otherwise)
    {
        if (TryGetProblem(out var problemValue)) onProblem(problemValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeleteDocumentInSignatureRequestError)} holds no value.");
    }

    private static Task<DeleteDocumentInSignatureRequestError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 401 or 404 or 429 or 500 or 503 => response.Json<Problem>().As(AsProblem),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteDocumentInSignatureRequestError> Response { get; } = new(Create);
}
