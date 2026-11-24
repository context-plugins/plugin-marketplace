using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class DeleteConsentError : ApiError
{
    private readonly Optional<UsersConsents400Error1> _usersConsents400Error1Value;

    private readonly Optional<UsersConsents401Error1> _usersConsents401Error1Value;

    private readonly Optional<UsersConsents403Error1> _usersConsents403Error1Value;

    private readonly Optional<UsersConsents404Error1> _usersConsents404Error1Value;

    private readonly Optional<UsersConsents500Error1> _usersConsents500Error1Value;

    private readonly Optional<UsersConsents503Error1> _usersConsents503Error1Value;

    private DeleteConsentError(Optional<UsersConsents400Error1> usersConsents400Error1Value,
        Optional<UsersConsents401Error1> usersConsents401Error1Value,
        Optional<UsersConsents403Error1> usersConsents403Error1Value,
        Optional<UsersConsents404Error1> usersConsents404Error1Value,
        Optional<UsersConsents500Error1> usersConsents500Error1Value,
        Optional<UsersConsents503Error1> usersConsents503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _usersConsents400Error1Value = usersConsents400Error1Value;
        _usersConsents401Error1Value = usersConsents401Error1Value;
        _usersConsents403Error1Value = usersConsents403Error1Value;
        _usersConsents404Error1Value = usersConsents404Error1Value;
        _usersConsents500Error1Value = usersConsents500Error1Value;
        _usersConsents503Error1Value = usersConsents503Error1Value;
    }

    private static DeleteConsentError AsUsersConsents400Error1(UsersConsents400Error1 value) =>
        new(Optional<UsersConsents400Error1>.Some(value), default, default, default, default, default, default);

    private static DeleteConsentError AsUsersConsents401Error1(UsersConsents401Error1 value) =>
        new(default, Optional<UsersConsents401Error1>.Some(value), default, default, default, default, default);

    private static DeleteConsentError AsUsersConsents403Error1(UsersConsents403Error1 value) =>
        new(default, default, Optional<UsersConsents403Error1>.Some(value), default, default, default, default);

    private static DeleteConsentError AsUsersConsents404Error1(UsersConsents404Error1 value) =>
        new(default, default, default, Optional<UsersConsents404Error1>.Some(value), default, default, default);

    private static DeleteConsentError AsUsersConsents500Error1(UsersConsents500Error1 value) =>
        new(default, default, default, default, Optional<UsersConsents500Error1>.Some(value), default, default);

    private static DeleteConsentError AsUsersConsents503Error1(UsersConsents503Error1 value) =>
        new(default, default, default, default, default, Optional<UsersConsents503Error1>.Some(value), default);

    private static DeleteConsentError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetUsersConsents400Error1([NotNullWhen(true)] out UsersConsents400Error1? value) =>
        _usersConsents400Error1Value.TryGetValue(out value);

    public bool TryGetUsersConsents401Error1([NotNullWhen(true)] out UsersConsents401Error1? value) =>
        _usersConsents401Error1Value.TryGetValue(out value);

    public bool TryGetUsersConsents403Error1([NotNullWhen(true)] out UsersConsents403Error1? value) =>
        _usersConsents403Error1Value.TryGetValue(out value);

    public bool TryGetUsersConsents404Error1([NotNullWhen(true)] out UsersConsents404Error1? value) =>
        _usersConsents404Error1Value.TryGetValue(out value);

    public bool TryGetUsersConsents500Error1([NotNullWhen(true)] out UsersConsents500Error1? value) =>
        _usersConsents500Error1Value.TryGetValue(out value);

    public bool TryGetUsersConsents503Error1([NotNullWhen(true)] out UsersConsents503Error1? value) =>
        _usersConsents503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<UsersConsents400Error1, TResult> onUsersConsents400Error1,
        Func<UsersConsents401Error1, TResult> onUsersConsents401Error1,
        Func<UsersConsents403Error1, TResult> onUsersConsents403Error1,
        Func<UsersConsents404Error1, TResult> onUsersConsents404Error1,
        Func<UsersConsents500Error1, TResult> onUsersConsents500Error1,
        Func<UsersConsents503Error1, TResult> onUsersConsents503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetUsersConsents400Error1(out var usersConsents400Error1Value) => onUsersConsents400Error1(
                usersConsents400Error1Value),
            _ when TryGetUsersConsents401Error1(out var usersConsents401Error1Value) => onUsersConsents401Error1(
                usersConsents401Error1Value),
            _ when TryGetUsersConsents403Error1(out var usersConsents403Error1Value) => onUsersConsents403Error1(
                usersConsents403Error1Value),
            _ when TryGetUsersConsents404Error1(out var usersConsents404Error1Value) => onUsersConsents404Error1(
                usersConsents404Error1Value),
            _ when TryGetUsersConsents500Error1(out var usersConsents500Error1Value) => onUsersConsents500Error1(
                usersConsents500Error1Value),
            _ when TryGetUsersConsents503Error1(out var usersConsents503Error1Value) => onUsersConsents503Error1(
                usersConsents503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(DeleteConsentError)} holds no value.")
        };

    public void Match(Action<UsersConsents400Error1> onUsersConsents400Error1,
        Action<UsersConsents401Error1> onUsersConsents401Error1,
        Action<UsersConsents403Error1> onUsersConsents403Error1,
        Action<UsersConsents404Error1> onUsersConsents404Error1,
        Action<UsersConsents500Error1> onUsersConsents500Error1,
        Action<UsersConsents503Error1> onUsersConsents503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetUsersConsents400Error1(out var usersConsents400Error1Value)) onUsersConsents400Error1(
            usersConsents400Error1Value);
        else if (TryGetUsersConsents401Error1(out var usersConsents401Error1Value)) onUsersConsents401Error1(
            usersConsents401Error1Value);
        else if (TryGetUsersConsents403Error1(out var usersConsents403Error1Value)) onUsersConsents403Error1(
            usersConsents403Error1Value);
        else if (TryGetUsersConsents404Error1(out var usersConsents404Error1Value)) onUsersConsents404Error1(
            usersConsents404Error1Value);
        else if (TryGetUsersConsents500Error1(out var usersConsents500Error1Value)) onUsersConsents500Error1(
            usersConsents500Error1Value);
        else if (TryGetUsersConsents503Error1(out var usersConsents503Error1Value)) onUsersConsents503Error1(
            usersConsents503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(DeleteConsentError)} holds no value.");
    }

    private static Task<DeleteConsentError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<UsersConsents400Error1>().As(AsUsersConsents400Error1),
            401 => response.Json<UsersConsents401Error1>().As(AsUsersConsents401Error1),
            403 => response.Json<UsersConsents403Error1>().As(AsUsersConsents403Error1),
            404 => response.Json<UsersConsents404Error1>().As(AsUsersConsents404Error1),
            500 => response.Json<UsersConsents500Error1>().As(AsUsersConsents500Error1),
            503 => response.Json<UsersConsents503Error1>().As(AsUsersConsents503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<DeleteConsentError> Response { get; } = new(Create);
}
