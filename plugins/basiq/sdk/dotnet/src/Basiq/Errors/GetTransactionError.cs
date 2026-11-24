using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class GetTransactionError : ApiError
{
    private readonly Optional<UsersTransactions400Error1> _usersTransactions400Error1Value;

    private readonly Optional<UsersTransactions403Error1> _usersTransactions403Error1Value;

    private readonly Optional<UsersTransactions404Error1> _usersTransactions404Error1Value;

    private readonly Optional<UsersTransactions500Error1> _usersTransactions500Error1Value;

    private readonly Optional<UsersTransactions503Error1> _usersTransactions503Error1Value;

    private GetTransactionError(Optional<UsersTransactions400Error1> usersTransactions400Error1Value,
        Optional<UsersTransactions403Error1> usersTransactions403Error1Value,
        Optional<UsersTransactions404Error1> usersTransactions404Error1Value,
        Optional<UsersTransactions500Error1> usersTransactions500Error1Value,
        Optional<UsersTransactions503Error1> usersTransactions503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _usersTransactions400Error1Value = usersTransactions400Error1Value;
        _usersTransactions403Error1Value = usersTransactions403Error1Value;
        _usersTransactions404Error1Value = usersTransactions404Error1Value;
        _usersTransactions500Error1Value = usersTransactions500Error1Value;
        _usersTransactions503Error1Value = usersTransactions503Error1Value;
    }

    private static GetTransactionError AsUsersTransactions400Error1(UsersTransactions400Error1 value) =>
        new(Optional<UsersTransactions400Error1>.Some(value), default, default, default, default, default);

    private static GetTransactionError AsUsersTransactions403Error1(UsersTransactions403Error1 value) =>
        new(default, Optional<UsersTransactions403Error1>.Some(value), default, default, default, default);

    private static GetTransactionError AsUsersTransactions404Error1(UsersTransactions404Error1 value) =>
        new(default, default, Optional<UsersTransactions404Error1>.Some(value), default, default, default);

    private static GetTransactionError AsUsersTransactions500Error1(UsersTransactions500Error1 value) =>
        new(default, default, default, Optional<UsersTransactions500Error1>.Some(value), default, default);

    private static GetTransactionError AsUsersTransactions503Error1(UsersTransactions503Error1 value) =>
        new(default, default, default, default, Optional<UsersTransactions503Error1>.Some(value), default);

    private static GetTransactionError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetUsersTransactions400Error1([NotNullWhen(true)] out UsersTransactions400Error1? value) =>
        _usersTransactions400Error1Value.TryGetValue(out value);

    public bool TryGetUsersTransactions403Error1([NotNullWhen(true)] out UsersTransactions403Error1? value) =>
        _usersTransactions403Error1Value.TryGetValue(out value);

    public bool TryGetUsersTransactions404Error1([NotNullWhen(true)] out UsersTransactions404Error1? value) =>
        _usersTransactions404Error1Value.TryGetValue(out value);

    public bool TryGetUsersTransactions500Error1([NotNullWhen(true)] out UsersTransactions500Error1? value) =>
        _usersTransactions500Error1Value.TryGetValue(out value);

    public bool TryGetUsersTransactions503Error1([NotNullWhen(true)] out UsersTransactions503Error1? value) =>
        _usersTransactions503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<UsersTransactions400Error1, TResult> onUsersTransactions400Error1,
        Func<UsersTransactions403Error1, TResult> onUsersTransactions403Error1,
        Func<UsersTransactions404Error1, TResult> onUsersTransactions404Error1,
        Func<UsersTransactions500Error1, TResult> onUsersTransactions500Error1,
        Func<UsersTransactions503Error1, TResult> onUsersTransactions503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUsersTransactions400Error1(
                out var usersTransactions400Error1Value) => onUsersTransactions400Error1(
                usersTransactions400Error1Value),
            _ when TryGetUsersTransactions403Error1(
                out var usersTransactions403Error1Value) => onUsersTransactions403Error1(
                usersTransactions403Error1Value),
            _ when TryGetUsersTransactions404Error1(
                out var usersTransactions404Error1Value) => onUsersTransactions404Error1(
                usersTransactions404Error1Value),
            _ when TryGetUsersTransactions500Error1(
                out var usersTransactions500Error1Value) => onUsersTransactions500Error1(
                usersTransactions500Error1Value),
            _ when TryGetUsersTransactions503Error1(
                out var usersTransactions503Error1Value) => onUsersTransactions503Error1(
                usersTransactions503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetTransactionError)} holds no value.")
        };

    public void Match(Action<UsersTransactions400Error1> onUsersTransactions400Error1,
        Action<UsersTransactions403Error1> onUsersTransactions403Error1,
        Action<UsersTransactions404Error1> onUsersTransactions404Error1,
        Action<UsersTransactions500Error1> onUsersTransactions500Error1,
        Action<UsersTransactions503Error1> onUsersTransactions503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetUsersTransactions400Error1(out var usersTransactions400Error1Value)) onUsersTransactions400Error1(
            usersTransactions400Error1Value);
        else if (TryGetUsersTransactions403Error1(
            out var usersTransactions403Error1Value)) onUsersTransactions403Error1(usersTransactions403Error1Value);
        else if (TryGetUsersTransactions404Error1(
            out var usersTransactions404Error1Value)) onUsersTransactions404Error1(usersTransactions404Error1Value);
        else if (TryGetUsersTransactions500Error1(
            out var usersTransactions500Error1Value)) onUsersTransactions500Error1(usersTransactions500Error1Value);
        else if (TryGetUsersTransactions503Error1(
            out var usersTransactions503Error1Value)) onUsersTransactions503Error1(usersTransactions503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetTransactionError)} holds no value.");
    }

    private static Task<GetTransactionError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<UsersTransactions400Error1>().As(AsUsersTransactions400Error1),
            403 => response.Json<UsersTransactions403Error1>().As(AsUsersTransactions403Error1),
            404 => response.Json<UsersTransactions404Error1>().As(AsUsersTransactions404Error1),
            500 => response.Json<UsersTransactions500Error1>().As(AsUsersTransactions500Error1),
            503 => response.Json<UsersTransactions503Error1>().As(AsUsersTransactions503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetTransactionError> Response { get; } = new(Create);
}
