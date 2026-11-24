using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class PostIncomeError : ApiError
{
    private readonly Optional<UsersIncome400Error1> _usersIncome400Error1Value;

    private readonly Optional<UsersIncome403Error1> _usersIncome403Error1Value;

    private readonly Optional<UsersIncome404Error1> _usersIncome404Error1Value;

    private readonly Optional<UsersIncome500Error1> _usersIncome500Error1Value;

    private PostIncomeError(Optional<UsersIncome400Error1> usersIncome400Error1Value,
        Optional<UsersIncome403Error1> usersIncome403Error1Value,
        Optional<UsersIncome404Error1> usersIncome404Error1Value,
        Optional<UsersIncome500Error1> usersIncome500Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _usersIncome400Error1Value = usersIncome400Error1Value;
        _usersIncome403Error1Value = usersIncome403Error1Value;
        _usersIncome404Error1Value = usersIncome404Error1Value;
        _usersIncome500Error1Value = usersIncome500Error1Value;
    }

    private static PostIncomeError AsUsersIncome400Error1(UsersIncome400Error1 value) =>
        new(Optional<UsersIncome400Error1>.Some(value), default, default, default, default);

    private static PostIncomeError AsUsersIncome403Error1(UsersIncome403Error1 value) =>
        new(default, Optional<UsersIncome403Error1>.Some(value), default, default, default);

    private static PostIncomeError AsUsersIncome404Error1(UsersIncome404Error1 value) =>
        new(default, default, Optional<UsersIncome404Error1>.Some(value), default, default);

    private static PostIncomeError AsUsersIncome500Error1(UsersIncome500Error1 value) =>
        new(default, default, default, Optional<UsersIncome500Error1>.Some(value), default);

    private static PostIncomeError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetUsersIncome400Error1([NotNullWhen(true)] out UsersIncome400Error1? value) =>
        _usersIncome400Error1Value.TryGetValue(out value);

    public bool TryGetUsersIncome403Error1([NotNullWhen(true)] out UsersIncome403Error1? value) =>
        _usersIncome403Error1Value.TryGetValue(out value);

    public bool TryGetUsersIncome404Error1([NotNullWhen(true)] out UsersIncome404Error1? value) =>
        _usersIncome404Error1Value.TryGetValue(out value);

    public bool TryGetUsersIncome500Error1([NotNullWhen(true)] out UsersIncome500Error1? value) =>
        _usersIncome500Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<UsersIncome400Error1, TResult> onUsersIncome400Error1,
        Func<UsersIncome403Error1, TResult> onUsersIncome403Error1,
        Func<UsersIncome404Error1, TResult> onUsersIncome404Error1,
        Func<UsersIncome500Error1, TResult> onUsersIncome500Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUsersIncome400Error1(out var usersIncome400Error1Value) => onUsersIncome400Error1(
                usersIncome400Error1Value),
            _ when TryGetUsersIncome403Error1(out var usersIncome403Error1Value) => onUsersIncome403Error1(
                usersIncome403Error1Value),
            _ when TryGetUsersIncome404Error1(out var usersIncome404Error1Value) => onUsersIncome404Error1(
                usersIncome404Error1Value),
            _ when TryGetUsersIncome500Error1(out var usersIncome500Error1Value) => onUsersIncome500Error1(
                usersIncome500Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostIncomeError)} holds no value.")
        };

    public void Match(Action<UsersIncome400Error1> onUsersIncome400Error1,
        Action<UsersIncome403Error1> onUsersIncome403Error1,
        Action<UsersIncome404Error1> onUsersIncome404Error1,
        Action<UsersIncome500Error1> onUsersIncome500Error1,
        Action<RawError> otherwise)
    {
        if (TryGetUsersIncome400Error1(out var usersIncome400Error1Value)) onUsersIncome400Error1(
            usersIncome400Error1Value);
        else if (TryGetUsersIncome403Error1(out var usersIncome403Error1Value)) onUsersIncome403Error1(
            usersIncome403Error1Value);
        else if (TryGetUsersIncome404Error1(out var usersIncome404Error1Value)) onUsersIncome404Error1(
            usersIncome404Error1Value);
        else if (TryGetUsersIncome500Error1(out var usersIncome500Error1Value)) onUsersIncome500Error1(
            usersIncome500Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostIncomeError)} holds no value.");
    }

    private static Task<PostIncomeError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<UsersIncome400Error1>().As(AsUsersIncome400Error1),
            403 => response.Json<UsersIncome403Error1>().As(AsUsersIncome403Error1),
            404 => response.Json<UsersIncome404Error1>().As(AsUsersIncome404Error1),
            500 => response.Json<UsersIncome500Error1>().As(AsUsersIncome500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostIncomeError> Response { get; } = new(Create);
}
