using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using DoiT.Core.ErrorResponse;
using DoiT.Core.Models;
using DoiT.Models;

namespace DoiT.Errors;

public sealed class VerifySignupRequestError : ApiError
{
    private readonly Optional<SignupProblem> _signupProblemValue;

    private VerifySignupRequestError(Optional<SignupProblem> signupProblemValue,
        Optional<RawError> fallback) : base(fallback)
    {
        _signupProblemValue = signupProblemValue;
    }

    private static VerifySignupRequestError AsSignupProblem(SignupProblem value) =>
        new(Optional<SignupProblem>.Some(value), default);

    private static VerifySignupRequestError AsFallback(RawError value) => new(default, Optional<RawError>.Some(value));

    public bool TryGetSignupProblem([NotNullWhen(true)] out SignupProblem? value) =>
        _signupProblemValue.TryGetValue(out value);

    public TResult Match<TResult>(Func<SignupProblem, TResult> onSignupProblem, Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetSignupProblem(out var signupProblemValue) => onSignupProblem(signupProblemValue),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(VerifySignupRequestError)} holds no value.")
        };

    public void Match(Action<SignupProblem> onSignupProblem, Action<RawError> otherwise)
    {
        if (TryGetSignupProblem(out var signupProblemValue)) onSignupProblem(signupProblemValue);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(VerifySignupRequestError)} holds no value.");
    }

    private static Task<VerifySignupRequestError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 or 404 or 409 or 429 => response.Json<SignupProblem>().As(AsSignupProblem),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<VerifySignupRequestError> Response { get; } = new(Create);
}
