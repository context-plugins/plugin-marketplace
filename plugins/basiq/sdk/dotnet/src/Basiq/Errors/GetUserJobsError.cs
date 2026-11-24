using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class GetUserJobsError : ApiError
{
    private readonly Optional<UsersJobs400Error1> _usersJobs400Error1Value;

    private readonly Optional<UsersJobs401Error1> _usersJobs401Error1Value;

    private readonly Optional<UsersJobs403Error1> _usersJobs403Error1Value;

    private readonly Optional<UsersJobs404Error1> _usersJobs404Error1Value;

    private readonly Optional<UsersJobs500Error1> _usersJobs500Error1Value;

    private GetUserJobsError(Optional<UsersJobs400Error1> usersJobs400Error1Value,
        Optional<UsersJobs401Error1> usersJobs401Error1Value,
        Optional<UsersJobs403Error1> usersJobs403Error1Value,
        Optional<UsersJobs404Error1> usersJobs404Error1Value,
        Optional<UsersJobs500Error1> usersJobs500Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _usersJobs400Error1Value = usersJobs400Error1Value;
        _usersJobs401Error1Value = usersJobs401Error1Value;
        _usersJobs403Error1Value = usersJobs403Error1Value;
        _usersJobs404Error1Value = usersJobs404Error1Value;
        _usersJobs500Error1Value = usersJobs500Error1Value;
    }

    private static GetUserJobsError AsUsersJobs400Error1(UsersJobs400Error1 value) =>
        new(Optional<UsersJobs400Error1>.Some(value), default, default, default, default, default);

    private static GetUserJobsError AsUsersJobs401Error1(UsersJobs401Error1 value) =>
        new(default, Optional<UsersJobs401Error1>.Some(value), default, default, default, default);

    private static GetUserJobsError AsUsersJobs403Error1(UsersJobs403Error1 value) =>
        new(default, default, Optional<UsersJobs403Error1>.Some(value), default, default, default);

    private static GetUserJobsError AsUsersJobs404Error1(UsersJobs404Error1 value) =>
        new(default, default, default, Optional<UsersJobs404Error1>.Some(value), default, default);

    private static GetUserJobsError AsUsersJobs500Error1(UsersJobs500Error1 value) =>
        new(default, default, default, default, Optional<UsersJobs500Error1>.Some(value), default);

    private static GetUserJobsError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetUsersJobs400Error1([NotNullWhen(true)] out UsersJobs400Error1? value) =>
        _usersJobs400Error1Value.TryGetValue(out value);

    public bool TryGetUsersJobs401Error1([NotNullWhen(true)] out UsersJobs401Error1? value) =>
        _usersJobs401Error1Value.TryGetValue(out value);

    public bool TryGetUsersJobs403Error1([NotNullWhen(true)] out UsersJobs403Error1? value) =>
        _usersJobs403Error1Value.TryGetValue(out value);

    public bool TryGetUsersJobs404Error1([NotNullWhen(true)] out UsersJobs404Error1? value) =>
        _usersJobs404Error1Value.TryGetValue(out value);

    public bool TryGetUsersJobs500Error1([NotNullWhen(true)] out UsersJobs500Error1? value) =>
        _usersJobs500Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<UsersJobs400Error1, TResult> onUsersJobs400Error1,
        Func<UsersJobs401Error1, TResult> onUsersJobs401Error1,
        Func<UsersJobs403Error1, TResult> onUsersJobs403Error1,
        Func<UsersJobs404Error1, TResult> onUsersJobs404Error1,
        Func<UsersJobs500Error1, TResult> onUsersJobs500Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUsersJobs400Error1(out var usersJobs400Error1Value) => onUsersJobs400Error1(
                usersJobs400Error1Value),
            _ when TryGetUsersJobs401Error1(out var usersJobs401Error1Value) => onUsersJobs401Error1(
                usersJobs401Error1Value),
            _ when TryGetUsersJobs403Error1(out var usersJobs403Error1Value) => onUsersJobs403Error1(
                usersJobs403Error1Value),
            _ when TryGetUsersJobs404Error1(out var usersJobs404Error1Value) => onUsersJobs404Error1(
                usersJobs404Error1Value),
            _ when TryGetUsersJobs500Error1(out var usersJobs500Error1Value) => onUsersJobs500Error1(
                usersJobs500Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetUserJobsError)} holds no value.")
        };

    public void Match(Action<UsersJobs400Error1> onUsersJobs400Error1,
        Action<UsersJobs401Error1> onUsersJobs401Error1,
        Action<UsersJobs403Error1> onUsersJobs403Error1,
        Action<UsersJobs404Error1> onUsersJobs404Error1,
        Action<UsersJobs500Error1> onUsersJobs500Error1,
        Action<RawError> otherwise)
    {
        if (TryGetUsersJobs400Error1(out var usersJobs400Error1Value)) onUsersJobs400Error1(usersJobs400Error1Value);
        else if (TryGetUsersJobs401Error1(out var usersJobs401Error1Value)) onUsersJobs401Error1(
            usersJobs401Error1Value);
        else if (TryGetUsersJobs403Error1(out var usersJobs403Error1Value)) onUsersJobs403Error1(
            usersJobs403Error1Value);
        else if (TryGetUsersJobs404Error1(out var usersJobs404Error1Value)) onUsersJobs404Error1(
            usersJobs404Error1Value);
        else if (TryGetUsersJobs500Error1(out var usersJobs500Error1Value)) onUsersJobs500Error1(
            usersJobs500Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetUserJobsError)} holds no value.");
    }

    private static Task<GetUserJobsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<UsersJobs400Error1>().As(AsUsersJobs400Error1),
            401 => response.Json<UsersJobs401Error1>().As(AsUsersJobs401Error1),
            403 => response.Json<UsersJobs403Error1>().As(AsUsersJobs403Error1),
            404 => response.Json<UsersJobs404Error1>().As(AsUsersJobs404Error1),
            500 => response.Json<UsersJobs500Error1>().As(AsUsersJobs500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetUserJobsError> Response { get; } = new(Create);
}
