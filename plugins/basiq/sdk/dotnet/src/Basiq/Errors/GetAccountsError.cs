using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class GetAccountsError : ApiError
{
    private readonly Optional<UsersAccounts400Error1> _usersAccounts400Error1Value;

    private readonly Optional<UsersAccounts403Error1> _usersAccounts403Error1Value;

    private readonly Optional<UsersAccounts404Error1> _usersAccounts404Error1Value;

    private readonly Optional<UsersAccounts500Error1> _usersAccounts500Error1Value;

    private GetAccountsError(Optional<UsersAccounts400Error1> usersAccounts400Error1Value,
        Optional<UsersAccounts403Error1> usersAccounts403Error1Value,
        Optional<UsersAccounts404Error1> usersAccounts404Error1Value,
        Optional<UsersAccounts500Error1> usersAccounts500Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _usersAccounts400Error1Value = usersAccounts400Error1Value;
        _usersAccounts403Error1Value = usersAccounts403Error1Value;
        _usersAccounts404Error1Value = usersAccounts404Error1Value;
        _usersAccounts500Error1Value = usersAccounts500Error1Value;
    }

    private static GetAccountsError AsUsersAccounts400Error1(UsersAccounts400Error1 value) =>
        new(Optional<UsersAccounts400Error1>.Some(value), default, default, default, default);

    private static GetAccountsError AsUsersAccounts403Error1(UsersAccounts403Error1 value) =>
        new(default, Optional<UsersAccounts403Error1>.Some(value), default, default, default);

    private static GetAccountsError AsUsersAccounts404Error1(UsersAccounts404Error1 value) =>
        new(default, default, Optional<UsersAccounts404Error1>.Some(value), default, default);

    private static GetAccountsError AsUsersAccounts500Error1(UsersAccounts500Error1 value) =>
        new(default, default, default, Optional<UsersAccounts500Error1>.Some(value), default);

    private static GetAccountsError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetUsersAccounts400Error1([NotNullWhen(true)] out UsersAccounts400Error1? value) =>
        _usersAccounts400Error1Value.TryGetValue(out value);

    public bool TryGetUsersAccounts403Error1([NotNullWhen(true)] out UsersAccounts403Error1? value) =>
        _usersAccounts403Error1Value.TryGetValue(out value);

    public bool TryGetUsersAccounts404Error1([NotNullWhen(true)] out UsersAccounts404Error1? value) =>
        _usersAccounts404Error1Value.TryGetValue(out value);

    public bool TryGetUsersAccounts500Error1([NotNullWhen(true)] out UsersAccounts500Error1? value) =>
        _usersAccounts500Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<UsersAccounts400Error1, TResult> onUsersAccounts400Error1,
        Func<UsersAccounts403Error1, TResult> onUsersAccounts403Error1,
        Func<UsersAccounts404Error1, TResult> onUsersAccounts404Error1,
        Func<UsersAccounts500Error1, TResult> onUsersAccounts500Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUsersAccounts400Error1(out var usersAccounts400Error1Value) => onUsersAccounts400Error1(
                usersAccounts400Error1Value),
            _ when TryGetUsersAccounts403Error1(out var usersAccounts403Error1Value) => onUsersAccounts403Error1(
                usersAccounts403Error1Value),
            _ when TryGetUsersAccounts404Error1(out var usersAccounts404Error1Value) => onUsersAccounts404Error1(
                usersAccounts404Error1Value),
            _ when TryGetUsersAccounts500Error1(out var usersAccounts500Error1Value) => onUsersAccounts500Error1(
                usersAccounts500Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetAccountsError)} holds no value.")
        };

    public void Match(Action<UsersAccounts400Error1> onUsersAccounts400Error1,
        Action<UsersAccounts403Error1> onUsersAccounts403Error1,
        Action<UsersAccounts404Error1> onUsersAccounts404Error1,
        Action<UsersAccounts500Error1> onUsersAccounts500Error1,
        Action<RawError> otherwise)
    {
        if (TryGetUsersAccounts400Error1(out var usersAccounts400Error1Value)) onUsersAccounts400Error1(
            usersAccounts400Error1Value);
        else if (TryGetUsersAccounts403Error1(out var usersAccounts403Error1Value)) onUsersAccounts403Error1(
            usersAccounts403Error1Value);
        else if (TryGetUsersAccounts404Error1(out var usersAccounts404Error1Value)) onUsersAccounts404Error1(
            usersAccounts404Error1Value);
        else if (TryGetUsersAccounts500Error1(out var usersAccounts500Error1Value)) onUsersAccounts500Error1(
            usersAccounts500Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetAccountsError)} holds no value.");
    }

    private static Task<GetAccountsError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<UsersAccounts400Error1>().As(AsUsersAccounts400Error1),
            403 => response.Json<UsersAccounts403Error1>().As(AsUsersAccounts403Error1),
            404 => response.Json<UsersAccounts404Error1>().As(AsUsersAccounts404Error1),
            500 => response.Json<UsersAccounts500Error1>().As(AsUsersAccounts500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAccountsError> Response { get; } = new(Create);
}
