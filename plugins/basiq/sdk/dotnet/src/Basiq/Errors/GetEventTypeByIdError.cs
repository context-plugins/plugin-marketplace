using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading.Tasks;
using Basiq.Core.ErrorResponse;
using Basiq.Core.Models;
using Basiq.Models;

namespace Basiq.Errors;

public sealed class GetEventTypeByIdError : ApiError
{
    private readonly Optional<EventsTypes400Error1> _eventsTypes400Error1Value;

    private readonly Optional<EventsTypes401Error1> _eventsTypes401Error1Value;

    private readonly Optional<EventsTypes403Error1> _eventsTypes403Error1Value;

    private readonly Optional<EventsTypes404Error1> _eventsTypes404Error1Value;

    private readonly Optional<EventsTypes429Error1> _eventsTypes429Error1Value;

    private readonly Optional<EventsTypes500Error1> _eventsTypes500Error1Value;

    private readonly Optional<EventsTypes503Error1> _eventsTypes503Error1Value;

    private GetEventTypeByIdError(Optional<EventsTypes400Error1> eventsTypes400Error1Value,
        Optional<EventsTypes401Error1> eventsTypes401Error1Value,
        Optional<EventsTypes403Error1> eventsTypes403Error1Value,
        Optional<EventsTypes404Error1> eventsTypes404Error1Value,
        Optional<EventsTypes429Error1> eventsTypes429Error1Value,
        Optional<EventsTypes500Error1> eventsTypes500Error1Value,
        Optional<EventsTypes503Error1> eventsTypes503Error1Value,
        Optional<RawError> fallback) : base(fallback)
    {
        _eventsTypes400Error1Value = eventsTypes400Error1Value;
        _eventsTypes401Error1Value = eventsTypes401Error1Value;
        _eventsTypes403Error1Value = eventsTypes403Error1Value;
        _eventsTypes404Error1Value = eventsTypes404Error1Value;
        _eventsTypes429Error1Value = eventsTypes429Error1Value;
        _eventsTypes500Error1Value = eventsTypes500Error1Value;
        _eventsTypes503Error1Value = eventsTypes503Error1Value;
    }

    private static GetEventTypeByIdError AsEventsTypes400Error1(EventsTypes400Error1 value) =>
        new(Optional<EventsTypes400Error1>.Some(value), default, default, default, default, default, default, default);

    private static GetEventTypeByIdError AsEventsTypes401Error1(EventsTypes401Error1 value) =>
        new(default, Optional<EventsTypes401Error1>.Some(value), default, default, default, default, default, default);

    private static GetEventTypeByIdError AsEventsTypes403Error1(EventsTypes403Error1 value) =>
        new(default, default, Optional<EventsTypes403Error1>.Some(value), default, default, default, default, default);

    private static GetEventTypeByIdError AsEventsTypes404Error1(EventsTypes404Error1 value) =>
        new(default, default, default, Optional<EventsTypes404Error1>.Some(value), default, default, default, default);

    private static GetEventTypeByIdError AsEventsTypes429Error1(EventsTypes429Error1 value) =>
        new(default, default, default, default, Optional<EventsTypes429Error1>.Some(value), default, default, default);

    private static GetEventTypeByIdError AsEventsTypes500Error1(EventsTypes500Error1 value) =>
        new(default, default, default, default, default, Optional<EventsTypes500Error1>.Some(value), default, default);

    private static GetEventTypeByIdError AsEventsTypes503Error1(EventsTypes503Error1 value) =>
        new(default, default, default, default, default, default, Optional<EventsTypes503Error1>.Some(value), default);

    private static GetEventTypeByIdError AsFallback(RawError value) =>
        new(default, default, default, default, default, default, default, Optional<RawError>.Some(value));

    public bool TryGetEventsTypes400Error1([NotNullWhen(true)] out EventsTypes400Error1? value) =>
        _eventsTypes400Error1Value.TryGetValue(out value);

    public bool TryGetEventsTypes401Error1([NotNullWhen(true)] out EventsTypes401Error1? value) =>
        _eventsTypes401Error1Value.TryGetValue(out value);

    public bool TryGetEventsTypes403Error1([NotNullWhen(true)] out EventsTypes403Error1? value) =>
        _eventsTypes403Error1Value.TryGetValue(out value);

    public bool TryGetEventsTypes404Error1([NotNullWhen(true)] out EventsTypes404Error1? value) =>
        _eventsTypes404Error1Value.TryGetValue(out value);

    public bool TryGetEventsTypes429Error1([NotNullWhen(true)] out EventsTypes429Error1? value) =>
        _eventsTypes429Error1Value.TryGetValue(out value);

    public bool TryGetEventsTypes500Error1([NotNullWhen(true)] out EventsTypes500Error1? value) =>
        _eventsTypes500Error1Value.TryGetValue(out value);

    public bool TryGetEventsTypes503Error1([NotNullWhen(true)] out EventsTypes503Error1? value) =>
        _eventsTypes503Error1Value.TryGetValue(out value);

    public TResult Match<TResult>(Func<EventsTypes400Error1, TResult> onEventsTypes400Error1,
        Func<EventsTypes401Error1, TResult> onEventsTypes401Error1,
        Func<EventsTypes403Error1, TResult> onEventsTypes403Error1,
        Func<EventsTypes404Error1, TResult> onEventsTypes404Error1,
        Func<EventsTypes429Error1, TResult> onEventsTypes429Error1,
        Func<EventsTypes500Error1, TResult> onEventsTypes500Error1,
        Func<EventsTypes503Error1, TResult> onEventsTypes503Error1,
        Func<RawError, TResult> otherwise) =>
        this switch
        {
            _ when TryGetEventsTypes400Error1(out var eventsTypes400Error1Value) => onEventsTypes400Error1(
                eventsTypes400Error1Value),
            _ when TryGetEventsTypes401Error1(out var eventsTypes401Error1Value) => onEventsTypes401Error1(
                eventsTypes401Error1Value),
            _ when TryGetEventsTypes403Error1(out var eventsTypes403Error1Value) => onEventsTypes403Error1(
                eventsTypes403Error1Value),
            _ when TryGetEventsTypes404Error1(out var eventsTypes404Error1Value) => onEventsTypes404Error1(
                eventsTypes404Error1Value),
            _ when TryGetEventsTypes429Error1(out var eventsTypes429Error1Value) => onEventsTypes429Error1(
                eventsTypes429Error1Value),
            _ when TryGetEventsTypes500Error1(out var eventsTypes500Error1Value) => onEventsTypes500Error1(
                eventsTypes500Error1Value),
            _ when TryGetEventsTypes503Error1(out var eventsTypes503Error1Value) => onEventsTypes503Error1(
                eventsTypes503Error1Value),
            _ when TryGetRawError(out var fallback) => otherwise(fallback),
            _ => throw new InvalidOperationException($"{nameof(GetEventTypeByIdError)} holds no value.")
        };

    public void Match(Action<EventsTypes400Error1> onEventsTypes400Error1,
        Action<EventsTypes401Error1> onEventsTypes401Error1,
        Action<EventsTypes403Error1> onEventsTypes403Error1,
        Action<EventsTypes404Error1> onEventsTypes404Error1,
        Action<EventsTypes429Error1> onEventsTypes429Error1,
        Action<EventsTypes500Error1> onEventsTypes500Error1,
        Action<EventsTypes503Error1> onEventsTypes503Error1,
        Action<RawError> otherwise)
    {
        if (TryGetEventsTypes400Error1(out var eventsTypes400Error1Value)) onEventsTypes400Error1(
            eventsTypes400Error1Value);
        else if (TryGetEventsTypes401Error1(out var eventsTypes401Error1Value)) onEventsTypes401Error1(
            eventsTypes401Error1Value);
        else if (TryGetEventsTypes403Error1(out var eventsTypes403Error1Value)) onEventsTypes403Error1(
            eventsTypes403Error1Value);
        else if (TryGetEventsTypes404Error1(out var eventsTypes404Error1Value)) onEventsTypes404Error1(
            eventsTypes404Error1Value);
        else if (TryGetEventsTypes429Error1(out var eventsTypes429Error1Value)) onEventsTypes429Error1(
            eventsTypes429Error1Value);
        else if (TryGetEventsTypes500Error1(out var eventsTypes500Error1Value)) onEventsTypes500Error1(
            eventsTypes500Error1Value);
        else if (TryGetEventsTypes503Error1(out var eventsTypes503Error1Value)) onEventsTypes503Error1(
            eventsTypes503Error1Value);
        else if (TryGetRawError(out var fallback)) otherwise(fallback);
        else throw new InvalidOperationException($"{nameof(GetEventTypeByIdError)} holds no value.");
    }

    private static Task<GetEventTypeByIdError> Create(FailedResponse response) =>
        response.StatusCode switch
        {
            400 => response.Json<EventsTypes400Error1>().As(AsEventsTypes400Error1),
            401 => response.Json<EventsTypes401Error1>().As(AsEventsTypes401Error1),
            403 => response.Json<EventsTypes403Error1>().As(AsEventsTypes403Error1),
            404 => response.Json<EventsTypes404Error1>().As(AsEventsTypes404Error1),
            429 => response.Json<EventsTypes429Error1>().As(AsEventsTypes429Error1),
            500 => response.Json<EventsTypes500Error1>().As(AsEventsTypes500Error1),
            503 => response.Json<EventsTypes503Error1>().As(AsEventsTypes503Error1),
            _ => response.RawBody().As(AsFallback)
        };

    internal static ApiErrorResponse<GetEventTypeByIdError> Response { get; } = new(Create);
}
