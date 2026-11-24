using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Contentstack.Core.ErrorResponse;
using Contentstack.Core.Models;
using Contentstack.Models;

namespace Contentstack.Errors;

public sealed class GetProjectsByProjectUidEnvironmentsError : ApiError
{
    private readonly Optional<Error2> _error2Value;

    private GetProjectsByProjectUidEnvironmentsError(Optional<Error2> error2Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _error2Value = error2Value;
    }

    private static GetProjectsByProjectUidEnvironmentsError AsError2(Error2 value) =>
        new(Optional<Error2>.Some(value), default);

    private static GetProjectsByProjectUidEnvironmentsError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetError2([NotNullWhen(true)] out Error2? value) => _error2Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<Error2, TResult> onError2, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetError2(out var error2Value) => onError2(error2Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException(
                $"{nameof(GetProjectsByProjectUidEnvironmentsError)} holds no value.")
        };

    public void Match(Action<Error2> onError2, Action<RawError> otherwise)
    {
        if (TryGetError2(out var error2Value)) onError2(error2Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetProjectsByProjectUidEnvironmentsError)} holds no value.");
    }

    private static Task<GetProjectsByProjectUidEnvironmentsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            401 => response.Json<Error2>().As(AsError2),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetProjectsByProjectUidEnvironmentsError> Response { get; } = new(Create);
}
