using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class PostExpensesError : ApiError
{
    private readonly Optional<UsersExpenses400Error1> _usersExpenses400Error1Value;

    private readonly Optional<UsersExpenses403Error1> _usersExpenses403Error1Value;

    private readonly Optional<UsersExpenses404Error1> _usersExpenses404Error1Value;

    private readonly Optional<UsersExpenses500Error1> _usersExpenses500Error1Value;

    private PostExpensesError(Optional<UsersExpenses400Error1> usersExpenses400Error1Value,
        Optional<UsersExpenses403Error1> usersExpenses403Error1Value,
        Optional<UsersExpenses404Error1> usersExpenses404Error1Value,
        Optional<UsersExpenses500Error1> usersExpenses500Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _usersExpenses400Error1Value = usersExpenses400Error1Value;
        _usersExpenses403Error1Value = usersExpenses403Error1Value;
        _usersExpenses404Error1Value = usersExpenses404Error1Value;
        _usersExpenses500Error1Value = usersExpenses500Error1Value;
    }

    private static PostExpensesError AsUsersExpenses400Error1(UsersExpenses400Error1 value) =>
        new(Optional<UsersExpenses400Error1>.Some(value), default, default, default, default);

    private static PostExpensesError AsUsersExpenses403Error1(UsersExpenses403Error1 value) =>
        new(default, Optional<UsersExpenses403Error1>.Some(value), default, default, default);

    private static PostExpensesError AsUsersExpenses404Error1(UsersExpenses404Error1 value) =>
        new(default, default, Optional<UsersExpenses404Error1>.Some(value), default, default);

    private static PostExpensesError AsUsersExpenses500Error1(UsersExpenses500Error1 value) =>
        new(default, default, default, Optional<UsersExpenses500Error1>.Some(value), default);

    private static PostExpensesError AsFallback(RawError value) =>
        new(default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetUsersExpenses400Error1([NotNullWhen(true)] out UsersExpenses400Error1? value) =>
        _usersExpenses400Error1Value.TryGetValue(out value);

    public bool TryGetUsersExpenses403Error1([NotNullWhen(true)] out UsersExpenses403Error1? value) =>
        _usersExpenses403Error1Value.TryGetValue(out value);

    public bool TryGetUsersExpenses404Error1([NotNullWhen(true)] out UsersExpenses404Error1? value) =>
        _usersExpenses404Error1Value.TryGetValue(out value);

    public bool TryGetUsersExpenses500Error1([NotNullWhen(true)] out UsersExpenses500Error1? value) =>
        _usersExpenses500Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<UsersExpenses400Error1, TResult> onUsersExpenses400Error1,
        Func<UsersExpenses403Error1, TResult> onUsersExpenses403Error1,
        Func<UsersExpenses404Error1, TResult> onUsersExpenses404Error1,
        Func<UsersExpenses500Error1, TResult> onUsersExpenses500Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUsersExpenses400Error1(out var usersExpenses400Error1Value) => onUsersExpenses400Error1(
                usersExpenses400Error1Value),
            _ when TryGetUsersExpenses403Error1(out var usersExpenses403Error1Value) => onUsersExpenses403Error1(
                usersExpenses403Error1Value),
            _ when TryGetUsersExpenses404Error1(out var usersExpenses404Error1Value) => onUsersExpenses404Error1(
                usersExpenses404Error1Value),
            _ when TryGetUsersExpenses500Error1(out var usersExpenses500Error1Value) => onUsersExpenses500Error1(
                usersExpenses500Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(PostExpensesError)} holds no value.")
        };

    public void Match(Action<UsersExpenses400Error1> onUsersExpenses400Error1,
        Action<UsersExpenses403Error1> onUsersExpenses403Error1,
        Action<UsersExpenses404Error1> onUsersExpenses404Error1,
        Action<UsersExpenses500Error1> onUsersExpenses500Error1,
        Action<RawError> otherwise)
    {
        if (TryGetUsersExpenses400Error1(out var usersExpenses400Error1Value)) onUsersExpenses400Error1(
            usersExpenses400Error1Value);
        else if (TryGetUsersExpenses403Error1(out var usersExpenses403Error1Value)) onUsersExpenses403Error1(
            usersExpenses403Error1Value);
        else if (TryGetUsersExpenses404Error1(out var usersExpenses404Error1Value)) onUsersExpenses404Error1(
            usersExpenses404Error1Value);
        else if (TryGetUsersExpenses500Error1(out var usersExpenses500Error1Value)) onUsersExpenses500Error1(
            usersExpenses500Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(PostExpensesError)} holds no value.");
    }

    private static Task<PostExpensesError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<UsersExpenses400Error1>().As(AsUsersExpenses400Error1),
            403 => response.Json<UsersExpenses403Error1>().As(AsUsersExpenses403Error1),
            404 => response.Json<UsersExpenses404Error1>().As(AsUsersExpenses404Error1),
            500 => response.Json<UsersExpenses500Error1>().As(AsUsersExpenses500Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<PostExpensesError> Response { get; } = new(Create);
}
