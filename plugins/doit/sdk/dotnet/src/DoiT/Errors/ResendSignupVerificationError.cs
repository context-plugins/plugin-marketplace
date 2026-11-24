using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DoiT.Core.ErrorResponse;
using DoiT.Core.Models;
using DoiT.Models;

namespace DoiT.Errors;

public sealed class ResendSignupVerificationError : ApiError
{
    private readonly Optional<SignupProblem> _signupProblemValue;

    private ResendSignupVerificationError(Optional<SignupProblem> signupProblemValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _signupProblemValue = signupProblemValue;
    }

    private static ResendSignupVerificationError AsSignupProblem(SignupProblem value) =>
        new(Optional<SignupProblem>.Some(value), default);

    private static ResendSignupVerificationError AsFallback(RawError value) =>
        new(default, Optional<RawError>.Some(value));

    public bool TryGetSignupProblem([NotNullWhen(true)] out SignupProblem? value) =>
        _signupProblemValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<SignupProblem, TResult> onSignupProblem, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSignupProblem(out var signupProblemValue) => onSignupProblem(signupProblemValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(ResendSignupVerificationError)} holds no value.")
        };

    public void Match(Action<SignupProblem> onSignupProblem, Action<RawError> otherwise)
    {
        if (TryGetSignupProblem(out var signupProblemValue)) onSignupProblem(signupProblemValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(ResendSignupVerificationError)} holds no value.");
    }

    private static Task<ResendSignupVerificationError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            404 or 409 or 429 => response.Json<SignupProblem>().As(AsSignupProblem),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<ResendSignupVerificationError> Response { get; } = new(Create);
}
