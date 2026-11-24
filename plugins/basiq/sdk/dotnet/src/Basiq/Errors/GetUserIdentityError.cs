using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class GetUserIdentityError : ApiError
{
    private readonly Optional<UsersIdentities400Error1> _usersIdentities400Error1Value;

    private readonly Optional<UsersIdentities403Error1> _usersIdentities403Error1Value;

    private readonly Optional<UsersIdentities404Error1> _usersIdentities404Error1Value;

    private readonly Optional<UsersIdentities500Error1> _usersIdentities500Error1Value;

    private GetUserIdentityError(Optional<UsersIdentities400Error1> usersIdentities400Error1Value,
        Optional<UsersIdentities403Error1> usersIdentities403Error1Value,
        Optional<UsersIdentities404Error1> usersIdentities404Error1Value,
        Optional<UsersIdentities500Error1> usersIdentities500Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _usersIdentities400Error1Value = usersIdentities400Error1Value;
        _usersIdentities403Error1Value = usersIdentities403Error1Value;
        _usersIdentities404Error1Value = usersIdentities404Error1Value;
        _usersIdentities500Error1Value = usersIdentities500Error1Value;
    }

    private static GetUserIdentityError AsUsersIdentities400Error1(UsersIdentities400Error1 value) =>
        new(Optional<UsersIdentities400Error1>.Some(value), default, default, default, default);

    private static GetUserIdentityError AsUsersIdentities403Error1(UsersIdentities403Error1 value) =>
        new(default, Optional<UsersIdentities403Error1>.Some(value), default, default, default);

    private static GetUserIdentityError AsUsersIdentities404Error1(UsersIdentities404Error1 value) =>
        new(default, default, Optional<UsersIdentities404Error1>.Some(value), default, default);

    private static GetUserIdentityError AsUsersIdentities500Error1(UsersIdentities500Error1 value) =>
        new(default, default, default, Optional<UsersIdentities500Error1>.Some(value), default);

    private static GetUserIdentityError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetUsersIdentities400Error1([NotNullWhen(true)] out UsersIdentities400Error1? value) =>
        _usersIdentities400Error1Value.TryGetValue(out value);

    public bool TryGetUsersIdentities403Error1([NotNullWhen(true)] out UsersIdentities403Error1? value) =>
        _usersIdentities403Error1Value.TryGetValue(out value);

    public bool TryGetUsersIdentities404Error1([NotNullWhen(true)] out UsersIdentities404Error1? value) =>
        _usersIdentities404Error1Value.TryGetValue(out value);

    public bool TryGetUsersIdentities500Error1([NotNullWhen(true)] out UsersIdentities500Error1? value) =>
        _usersIdentities500Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<UsersIdentities400Error1, TResult> onUsersIdentities400Error1,
        Func<UsersIdentities403Error1, TResult> onUsersIdentities403Error1,
        Func<UsersIdentities404Error1, TResult> onUsersIdentities404Error1,
        Func<UsersIdentities500Error1, TResult> onUsersIdentities500Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUsersIdentities400Error1(out var usersIdentities400Error1Value) => onUsersIdentities400Error1(
                usersIdentities400Error1Value),
            _ when TryGetUsersIdentities403Error1(out var usersIdentities403Error1Value) => onUsersIdentities403Error1(
                usersIdentities403Error1Value),
            _ when TryGetUsersIdentities404Error1(out var usersIdentities404Error1Value) => onUsersIdentities404Error1(
                usersIdentities404Error1Value),
            _ when TryGetUsersIdentities500Error1(out var usersIdentities500Error1Value) => onUsersIdentities500Error1(
                usersIdentities500Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetUserIdentityError)} holds no value.")
        };

    public void Match(Action<UsersIdentities400Error1> onUsersIdentities400Error1,
        Action<UsersIdentities403Error1> onUsersIdentities403Error1,
        Action<UsersIdentities404Error1> onUsersIdentities404Error1,
        Action<UsersIdentities500Error1> onUsersIdentities500Error1,
        Action<RawError> otherwise)
    {
        if (TryGetUsersIdentities400Error1(out var usersIdentities400Error1Value)) onUsersIdentities400Error1(
            usersIdentities400Error1Value);
        else if (TryGetUsersIdentities403Error1(out var usersIdentities403Error1Value)) onUsersIdentities403Error1(
            usersIdentities403Error1Value);
        else if (TryGetUsersIdentities404Error1(out var usersIdentities404Error1Value)) onUsersIdentities404Error1(
            usersIdentities404Error1Value);
        else if (TryGetUsersIdentities500Error1(out var usersIdentities500Error1Value)) onUsersIdentities500Error1(
            usersIdentities500Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetUserIdentityError)} holds no value.");
    }

    private static Task<GetUserIdentityError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<UsersIdentities400Error1>().As(AsUsersIdentities400Error1),
            403 => response.Json<UsersIdentities403Error1>().As(AsUsersIdentities403Error1),
            404 => response.Json<UsersIdentities404Error1>().As(AsUsersIdentities404Error1),
            500 => response.Json<UsersIdentities500Error1>().As(AsUsersIdentities500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetUserIdentityError> Response { get; } = new(Create);
}
