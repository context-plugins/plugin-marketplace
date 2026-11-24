using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class CreateStatementError : ApiError
{
    private readonly Optional<UsersStatements400Error1> _usersStatements400Error1Value;

    private readonly Optional<UsersStatements403Error1> _usersStatements403Error1Value;

    private readonly Optional<UsersStatements404Error1> _usersStatements404Error1Value;

    private readonly Optional<UsersStatements500Error1> _usersStatements500Error1Value;

    private readonly Optional<UsersStatements503Error1> _usersStatements503Error1Value;

    private CreateStatementError(Optional<UsersStatements400Error1> usersStatements400Error1Value,
        Optional<UsersStatements403Error1> usersStatements403Error1Value,
        Optional<UsersStatements404Error1> usersStatements404Error1Value,
        Optional<UsersStatements500Error1> usersStatements500Error1Value,
        Optional<UsersStatements503Error1> usersStatements503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _usersStatements400Error1Value = usersStatements400Error1Value;
        _usersStatements403Error1Value = usersStatements403Error1Value;
        _usersStatements404Error1Value = usersStatements404Error1Value;
        _usersStatements500Error1Value = usersStatements500Error1Value;
        _usersStatements503Error1Value = usersStatements503Error1Value;
    }

    private static CreateStatementError AsUsersStatements400Error1(UsersStatements400Error1 value) =>
        new(Optional<UsersStatements400Error1>.Some(value), default, default, default, default, default);

    private static CreateStatementError AsUsersStatements403Error1(UsersStatements403Error1 value) =>
        new(default, Optional<UsersStatements403Error1>.Some(value), default, default, default, default);

    private static CreateStatementError AsUsersStatements404Error1(UsersStatements404Error1 value) =>
        new(default, default, Optional<UsersStatements404Error1>.Some(value), default, default, default);

    private static CreateStatementError AsUsersStatements500Error1(UsersStatements500Error1 value) =>
        new(default, default, default, Optional<UsersStatements500Error1>.Some(value), default, default);

    private static CreateStatementError AsUsersStatements503Error1(UsersStatements503Error1 value) =>
        new(default, default, default, default, Optional<UsersStatements503Error1>.Some(value), default);

    private static CreateStatementError AsFallback(RawError value) =>
        new(default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetUsersStatements400Error1([NotNullWhen(true)] out UsersStatements400Error1? value) =>
        _usersStatements400Error1Value.TryGetValue(out value);

    public bool TryGetUsersStatements403Error1([NotNullWhen(true)] out UsersStatements403Error1? value) =>
        _usersStatements403Error1Value.TryGetValue(out value);

    public bool TryGetUsersStatements404Error1([NotNullWhen(true)] out UsersStatements404Error1? value) =>
        _usersStatements404Error1Value.TryGetValue(out value);

    public bool TryGetUsersStatements500Error1([NotNullWhen(true)] out UsersStatements500Error1? value) =>
        _usersStatements500Error1Value.TryGetValue(out value);

    public bool TryGetUsersStatements503Error1([NotNullWhen(true)] out UsersStatements503Error1? value) =>
        _usersStatements503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<UsersStatements400Error1, TResult> onUsersStatements400Error1,
        Func<UsersStatements403Error1, TResult> onUsersStatements403Error1,
        Func<UsersStatements404Error1, TResult> onUsersStatements404Error1,
        Func<UsersStatements500Error1, TResult> onUsersStatements500Error1,
        Func<UsersStatements503Error1, TResult> onUsersStatements503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUsersStatements400Error1(out var usersStatements400Error1Value) => onUsersStatements400Error1(
                usersStatements400Error1Value),
            _ when TryGetUsersStatements403Error1(out var usersStatements403Error1Value) => onUsersStatements403Error1(
                usersStatements403Error1Value),
            _ when TryGetUsersStatements404Error1(out var usersStatements404Error1Value) => onUsersStatements404Error1(
                usersStatements404Error1Value),
            _ when TryGetUsersStatements500Error1(out var usersStatements500Error1Value) => onUsersStatements500Error1(
                usersStatements500Error1Value),
            _ when TryGetUsersStatements503Error1(out var usersStatements503Error1Value) => onUsersStatements503Error1(
                usersStatements503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(CreateStatementError)} holds no value.")
        };

    public void Match(Action<UsersStatements400Error1> onUsersStatements400Error1,
        Action<UsersStatements403Error1> onUsersStatements403Error1,
        Action<UsersStatements404Error1> onUsersStatements404Error1,
        Action<UsersStatements500Error1> onUsersStatements500Error1,
        Action<UsersStatements503Error1> onUsersStatements503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetUsersStatements400Error1(out var usersStatements400Error1Value)) onUsersStatements400Error1(
            usersStatements400Error1Value);
        else if (TryGetUsersStatements403Error1(out var usersStatements403Error1Value)) onUsersStatements403Error1(
            usersStatements403Error1Value);
        else if (TryGetUsersStatements404Error1(out var usersStatements404Error1Value)) onUsersStatements404Error1(
            usersStatements404Error1Value);
        else if (TryGetUsersStatements500Error1(out var usersStatements500Error1Value)) onUsersStatements500Error1(
            usersStatements500Error1Value);
        else if (TryGetUsersStatements503Error1(out var usersStatements503Error1Value)) onUsersStatements503Error1(
            usersStatements503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(CreateStatementError)} holds no value.");
    }

    private static Task<CreateStatementError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<UsersStatements400Error1>().As(AsUsersStatements400Error1),
            403 => response.Json<UsersStatements403Error1>().As(AsUsersStatements403Error1),
            404 => response.Json<UsersStatements404Error1>().As(AsUsersStatements404Error1),
            500 => response.Json<UsersStatements500Error1>().As(AsUsersStatements500Error1),
            503 => response.Json<UsersStatements503Error1>().As(AsUsersStatements503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<CreateStatementError> Response { get; } = new(Create);
}
