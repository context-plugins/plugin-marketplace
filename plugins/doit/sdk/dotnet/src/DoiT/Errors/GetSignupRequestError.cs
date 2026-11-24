using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DoiT.Core.ErrorResponse;
using DoiT.Core.Models;
using DoiT.Models;

namespace DoiT.Errors;

public sealed class GetSignupRequestError : ApiError
{
    private readonly Optional<SignupProblem> _signupProblemValue;

    private GetSignupRequestError(Optional<SignupProblem> signupProblemValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _signupProblemValue = signupProblemValue;
    }

    private static GetSignupRequestError AsSignupProblem(SignupProblem value) =>
        new(Optional<SignupProblem>.Some(value), default);

    private static GetSignupRequestError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetSignupProblem([NotNullWhen(true)] out SignupProblem? value) =>
        _signupProblemValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<SignupProblem, TResult> onSignupProblem, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSignupProblem(out var signupProblemValue) => onSignupProblem(signupProblemValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetSignupRequestError)} holds no value.")
        };

    public void Match(Action<SignupProblem> onSignupProblem, Action<RawError> otherwise)
    {
        if (TryGetSignupProblem(out var signupProblemValue)) onSignupProblem(signupProblemValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetSignupRequestError)} holds no value.");
    }

    private static Task<GetSignupRequestError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 or 429 => response.Json<SignupProblem>().As(AsSignupProblem),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetSignupRequestError> Response { get; } = new(Create);
}
