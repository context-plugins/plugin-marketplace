using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Bitbucket.Core.ErrorResponse;
using Bitbucket.Core.Models;
using Bitbucket.Models;

namespace Bitbucket.Errors;

public sealed class PutWorkspacesByWorkspaceHooksByUid2Error : ApiError
{
    private readonly Optional<Error> _errorValue;

    private PutWorkspacesByWorkspaceHooksByUid2Error(Optional<Error> errorValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _errorValue = errorValue;
    }

    private static PutWorkspacesByWorkspaceHooksByUid2Error AsError(Error value) =>
        new(Optional<Error>.Some(value), default);

    private static PutWorkspacesByWorkspaceHooksByUid2Error AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetError([NotNullWhen(true)] out Error? value) => _errorValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error, TResult> onError, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError(out var errorValue) => onError(errorValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(PutWorkspacesByWorkspaceHooksByUid2Error)} holds no value.")
        };

    public void Match(Action<Error> onError, Action<RawError> otherwise)
    {
        if (TryGetError(out var errorValue)) onError(errorValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PutWorkspacesByWorkspaceHooksByUid2Error)} holds no value.");
    }

    private static Task<PutWorkspacesByWorkspaceHooksByUid2Error> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            403 or 404 => response.Json<Error>().As(AsError),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PutWorkspacesByWorkspaceHooksByUid2Error> Response { get; } = new(Create);
}
