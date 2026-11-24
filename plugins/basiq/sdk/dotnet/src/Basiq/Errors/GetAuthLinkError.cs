using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class GetAuthLinkError : ApiError
{
    private readonly Optional<UsersAuthLink400Error1> _usersAuthLink400Error1Value;

    private readonly Optional<UsersAuthLink401Error1> _usersAuthLink401Error1Value;

    private readonly Optional<UsersAuthLink403Error1> _usersAuthLink403Error1Value;

    private readonly Optional<UsersAuthLink404Error1> _usersAuthLink404Error1Value;

    private readonly Optional<UsersAuthLink410Error1> _usersAuthLink410Error1Value;

    private readonly Optional<UsersAuthLink500Error1> _usersAuthLink500Error1Value;

    private readonly Optional<UsersAuthLink503Error1> _usersAuthLink503Error1Value;

    private GetAuthLinkError(Optional<UsersAuthLink400Error1> usersAuthLink400Error1Value,
        Optional<UsersAuthLink401Error1> usersAuthLink401Error1Value,
        Optional<UsersAuthLink403Error1> usersAuthLink403Error1Value,
        Optional<UsersAuthLink404Error1> usersAuthLink404Error1Value,
        Optional<UsersAuthLink410Error1> usersAuthLink410Error1Value,
        Optional<UsersAuthLink500Error1> usersAuthLink500Error1Value,
        Optional<UsersAuthLink503Error1> usersAuthLink503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _usersAuthLink400Error1Value = usersAuthLink400Error1Value;
        _usersAuthLink401Error1Value = usersAuthLink401Error1Value;
        _usersAuthLink403Error1Value = usersAuthLink403Error1Value;
        _usersAuthLink404Error1Value = usersAuthLink404Error1Value;
        _usersAuthLink410Error1Value = usersAuthLink410Error1Value;
        _usersAuthLink500Error1Value = usersAuthLink500Error1Value;
        _usersAuthLink503Error1Value = usersAuthLink503Error1Value;
    }

    private static GetAuthLinkError AsUsersAuthLink400Error1(UsersAuthLink400Error1 value) =>
        new(
            Optional<UsersAuthLink400Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default,
            default);

    private static GetAuthLinkError AsUsersAuthLink401Error1(UsersAuthLink401Error1 value) =>
        new(
            default,
            Optional<UsersAuthLink401Error1>.Some(value),
            default,
            default,
            default,
            default,
            default,
            default);

    private static GetAuthLinkError AsUsersAuthLink403Error1(UsersAuthLink403Error1 value) =>
        new(
            default,
            default,
            Optional<UsersAuthLink403Error1>.Some(value),
            default,
            default,
            default,
            default,
            default);

    private static GetAuthLinkError AsUsersAuthLink404Error1(UsersAuthLink404Error1 value) =>
        new(
            default,
            default,
            default,
            Optional<UsersAuthLink404Error1>.Some(value),
            default,
            default,
            default,
            default);

    private static GetAuthLinkError AsUsersAuthLink410Error1(UsersAuthLink410Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            Optional<UsersAuthLink410Error1>.Some(value),
            default,
            default,
            default);

    private static GetAuthLinkError AsUsersAuthLink500Error1(UsersAuthLink500Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            Optional<UsersAuthLink500Error1>.Some(value),
            default,
            default);

    private static GetAuthLinkError AsUsersAuthLink503Error1(UsersAuthLink503Error1 value) =>
        new(
            default,
            default,
            default,
            default,
            default,
            default,
            Optional<UsersAuthLink503Error1>.Some(value),
            default);

    private static GetAuthLinkError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetUsersAuthLink400Error1([NotNullWhen(true)] out UsersAuthLink400Error1? value) =>
        _usersAuthLink400Error1Value.TryGetValue(out value);

    public bool TryGetUsersAuthLink401Error1([NotNullWhen(true)] out UsersAuthLink401Error1? value) =>
        _usersAuthLink401Error1Value.TryGetValue(out value);

    public bool TryGetUsersAuthLink403Error1([NotNullWhen(true)] out UsersAuthLink403Error1? value) =>
        _usersAuthLink403Error1Value.TryGetValue(out value);

    public bool TryGetUsersAuthLink404Error1([NotNullWhen(true)] out UsersAuthLink404Error1? value) =>
        _usersAuthLink404Error1Value.TryGetValue(out value);

    public bool TryGetUsersAuthLink410Error1([NotNullWhen(true)] out UsersAuthLink410Error1? value) =>
        _usersAuthLink410Error1Value.TryGetValue(out value);

    public bool TryGetUsersAuthLink500Error1([NotNullWhen(true)] out UsersAuthLink500Error1? value) =>
        _usersAuthLink500Error1Value.TryGetValue(out value);

    public bool TryGetUsersAuthLink503Error1([NotNullWhen(true)] out UsersAuthLink503Error1? value) =>
        _usersAuthLink503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<UsersAuthLink400Error1, TResult> onUsersAuthLink400Error1,
        Func<UsersAuthLink401Error1, TResult> onUsersAuthLink401Error1,
        Func<UsersAuthLink403Error1, TResult> onUsersAuthLink403Error1,
        Func<UsersAuthLink404Error1, TResult> onUsersAuthLink404Error1,
        Func<UsersAuthLink410Error1, TResult> onUsersAuthLink410Error1,
        Func<UsersAuthLink500Error1, TResult> onUsersAuthLink500Error1,
        Func<UsersAuthLink503Error1, TResult> onUsersAuthLink503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUsersAuthLink400Error1(out var usersAuthLink400Error1Value) => onUsersAuthLink400Error1(
                usersAuthLink400Error1Value),
            _ when TryGetUsersAuthLink401Error1(out var usersAuthLink401Error1Value) => onUsersAuthLink401Error1(
                usersAuthLink401Error1Value),
            _ when TryGetUsersAuthLink403Error1(out var usersAuthLink403Error1Value) => onUsersAuthLink403Error1(
                usersAuthLink403Error1Value),
            _ when TryGetUsersAuthLink404Error1(out var usersAuthLink404Error1Value) => onUsersAuthLink404Error1(
                usersAuthLink404Error1Value),
            _ when TryGetUsersAuthLink410Error1(out var usersAuthLink410Error1Value) => onUsersAuthLink410Error1(
                usersAuthLink410Error1Value),
            _ when TryGetUsersAuthLink500Error1(out var usersAuthLink500Error1Value) => onUsersAuthLink500Error1(
                usersAuthLink500Error1Value),
            _ when TryGetUsersAuthLink503Error1(out var usersAuthLink503Error1Value) => onUsersAuthLink503Error1(
                usersAuthLink503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetAuthLinkError)} holds no value.")
        };

    public void Match(Action<UsersAuthLink400Error1> onUsersAuthLink400Error1,
        Action<UsersAuthLink401Error1> onUsersAuthLink401Error1,
        Action<UsersAuthLink403Error1> onUsersAuthLink403Error1,
        Action<UsersAuthLink404Error1> onUsersAuthLink404Error1,
        Action<UsersAuthLink410Error1> onUsersAuthLink410Error1,
        Action<UsersAuthLink500Error1> onUsersAuthLink500Error1,
        Action<UsersAuthLink503Error1> onUsersAuthLink503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetUsersAuthLink400Error1(out var usersAuthLink400Error1Value)) onUsersAuthLink400Error1(
            usersAuthLink400Error1Value);
        else if (TryGetUsersAuthLink401Error1(out var usersAuthLink401Error1Value)) onUsersAuthLink401Error1(
            usersAuthLink401Error1Value);
        else if (TryGetUsersAuthLink403Error1(out var usersAuthLink403Error1Value)) onUsersAuthLink403Error1(
            usersAuthLink403Error1Value);
        else if (TryGetUsersAuthLink404Error1(out var usersAuthLink404Error1Value)) onUsersAuthLink404Error1(
            usersAuthLink404Error1Value);
        else if (TryGetUsersAuthLink410Error1(out var usersAuthLink410Error1Value)) onUsersAuthLink410Error1(
            usersAuthLink410Error1Value);
        else if (TryGetUsersAuthLink500Error1(out var usersAuthLink500Error1Value)) onUsersAuthLink500Error1(
            usersAuthLink500Error1Value);
        else if (TryGetUsersAuthLink503Error1(out var usersAuthLink503Error1Value)) onUsersAuthLink503Error1(
            usersAuthLink503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetAuthLinkError)} holds no value.");
    }

    private static Task<GetAuthLinkError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<UsersAuthLink400Error1>().As(AsUsersAuthLink400Error1),
            401 => response.Json<UsersAuthLink401Error1>().As(AsUsersAuthLink401Error1),
            403 => response.Json<UsersAuthLink403Error1>().As(AsUsersAuthLink403Error1),
            404 => response.Json<UsersAuthLink404Error1>().As(AsUsersAuthLink404Error1),
            410 => response.Json<UsersAuthLink410Error1>().As(AsUsersAuthLink410Error1),
            500 => response.Json<UsersAuthLink500Error1>().As(AsUsersAuthLink500Error1),
            503 => response.Json<UsersAuthLink503Error1>().As(AsUsersAuthLink503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetAuthLinkError> Response { get; } = new(Create);
}
