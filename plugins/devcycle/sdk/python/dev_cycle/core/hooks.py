"""Caller code run on every attempt of every request: the SDK's request and response hooks.

A hook sees each **attempt**, not each call. ``before_request`` runs once the request is fully built -- the
API's, the endpoint's, the scheme's and the caller's layers folded in -- and before it is reported to the
call's log, so the request line shows what a hook changed. ``after_response`` runs once the response head has
been reported and a ``401`` has invalidated the scheme's cached credential, and before the retry loop decides.
Both run inside the loop, so a retried attempt runs them again: a hook must be safe to run more than once, and
``before_request`` may run with no ``after_response`` to follow it when the send fails.

Hooks run in order -- the client's, then the call's. A call's hooks are appended, never substituted, so a call
site cannot switch off what the client installed.

Hooks are given in one of two spellings, wherever a client takes them -- client-wide or for one call. A sequence
of hook objects, each an :class:`SdkHook` / :class:`AsyncSdkHook`. Or plain functions keyed by the event they run
on, ``{"on_request": [...], "on_response": [...]}`` -- an :class:`SdkHooksDict` / :class:`AsyncSdkHooksDict` --
which the runtime turns into one hook per function, the ``on_request`` ones first. The two keys are what make a
bare function placeable: a request function and a response function have the same shape, ``(value, context) ->
value``, and a lambda carries no annotation the runtime could tell them apart by. One place takes one spelling,
never a mix: a hook that keeps state across the two events is a class, or two bound methods of one object.

A request is frozen, so ``before_request`` *returns* the request to send -- the one it was given, or a
``dataclasses.replace`` of it -- and each hook is handed the previous one's. ``after_response`` is handed the
transport's own response, :class:`~.transport.HttpResponse` or :class:`~.transport.AsyncHttpResponse` by the
client's flavour, and *returns* the response the call acts on: the one it was given, or its own object
implementing the protocol. The retry gate, ``Retry-After`` and the result read what the last hook returned; the
response line and the 401 check have already read the transport's. A hook that reads the body must hand back a
response that still carries it, and one that returns a different response owns the one it was handed.

Everything here is **twinned by flavour**, as the clients are: :class:`SdkHook`, :class:`HookContext` and
:class:`SdkHooksDict` for the synchronous client, :class:`AsyncSdkHook`, :class:`AsyncHookContext` and
:class:`AsyncSdkHooksDict` for the asynchronous one, whose methods and functions are ``async def`` and are always
awaited. A call's hooks are typed for its client through the ``RequestOptions`` / ``AsyncRequestOptions`` twins,
so a hook of the wrong flavour is a type error wherever it is installed. **What a hook returns is not checked at
run time**: that, and which client it runs on, are the type checker's to enforce, and the raw client calls a
hook's methods directly, taking it at its word. A dict's keys are not checked either: only ``on_request`` and
``on_response`` are read, and any other key is ignored.

A hook that raises ends the call with that exception, unwrapped, after any response it was looking at is
closed. One raise is retried: :class:`~.exceptions.SdkConnectionError` **from ``before_request``**, naming the
call -- ``safe_url(context.url)``, as a transport names it -- its cause chained. That is the one exception the
retry loop reads, and it reads it around the send, where ``before_request`` runs; once the retries are spent, that
exception is what the caller sees, exactly as a transport's is. Raised from ``after_response`` it is not retried:
it ends the call like any other exception. ``after_response`` asks for a retry by status instead, returning a
response whose status the policy retries.

Hooks run on every request the client sends, the token requests its OAuth schemes make included: a hook sees
the credential in clear, as a transport does."""

from __future__ import annotations

from collections.abc import Awaitable, Callable, Mapping, Sequence
from dataclasses import dataclass
from typing import TYPE_CHECKING, Protocol

from typing_extensions import NotRequired, TypedDict

from ._internal.redaction import redact_url
from .transport import AsyncHttpResponse, HttpMethod, HttpRequest, HttpResponse

if TYPE_CHECKING:
    from .request_options import AsyncRequestOptions, RequestOptions


@dataclass(frozen=True, slots=True)
class HookContext:
    """What a synchronous hook knows about the call an attempt belongs to -- one per call, shared by its attempts."""

    method: HttpMethod

    url: str
    """The call's URL before auth: its path and query parameters rendered, the API-wide ones folded in. The
    attempt's own, a query-placed credential included, is the request's. An exception naming the call takes
    ``safe_url(url)``, as every result and exception does: the path alone, no query, no userinfo."""

    request_options: RequestOptions
    """The call's options, coerced; the shared empty options when the call set none."""

    def __repr__(self) -> str:
        # The URL carries the call's query, so it goes through the one printable-URL rule, as ``HttpRequest``'s
        # repr does: keys kept, a known-safe value kept, everything else ``REDACTED``.
        return (
            f"{type(self).__name__}(method={self.method!r}, url={redact_url(self.url)!r}, "
            f"request_options={self.request_options!r})"
        )


@dataclass(frozen=True, slots=True)
class AsyncHookContext:
    """The asynchronous twin of :class:`HookContext`: the same call, its options the call's ``AsyncRequestOptions``."""

    method: HttpMethod

    url: str
    """The call's URL before auth, exactly as :attr:`HookContext.url` describes it."""

    request_options: AsyncRequestOptions
    """The call's options, coerced; the shared empty options when the call set none."""

    def __repr__(self) -> str:
        # The same printable-URL rule as ``HookContext``'s repr.
        return (
            f"{type(self).__name__}(method={self.method!r}, url={redact_url(self.url)!r}, "
            f"request_options={self.request_options!r})"
        )


class SdkHook(Protocol):
    """A hook for the synchronous client.

    Both methods have a body, so a class that subclasses this one explicitly overrides only what it needs; any
    other object with both methods matches structurally."""

    def before_request(self, request: HttpRequest, context: HookContext) -> HttpRequest:
        """Return the request to send: ``request`` itself, or a ``dataclasses.replace`` of it.

        Args:
            request: The attempt's request, authenticated, as the previous hook returned it.
            context: The call this attempt belongs to.

        Returns:
            The request the next hook -- or, after the last, the log and the transport -- receives."""
        return request

    def after_response(self, response: HttpResponse, context: HookContext) -> HttpResponse:
        """Return the response the call acts on, after the 401 check and before the retry decision.

        Args:
            response: The attempt's response, its head arrived and its body unread, as the previous hook returned
                it.
            context: The call this attempt belongs to.

        Returns:
            ``response`` itself, or an object of the hook's own implementing the protocol -- what the next hook,
            the retry gate and the result read. A hook that returns a different response owns the one it was
            handed."""
        return response


class AsyncSdkHook(Protocol):
    """A hook for the asynchronous client: :class:`SdkHook`'s two methods as ``async def``, each awaited.

    It is handed an :class:`AsyncHookContext` and, after the response, an ``AsyncHttpResponse``, so a synchronous
    hook cannot stand in for it, nor it for one."""

    async def before_request(self, request: HttpRequest, context: AsyncHookContext) -> HttpRequest:
        """Return the request to send. See :meth:`SdkHook.before_request`.

        Args:
            request: The attempt's request, authenticated, as the previous hook returned it.
            context: The call this attempt belongs to.

        Returns:
            The request the next hook -- or, after the last, the log and the transport -- receives."""
        return request

    async def after_response(self, response: AsyncHttpResponse, context: AsyncHookContext) -> AsyncHttpResponse:
        """Return the response the call acts on. See :meth:`SdkHook.after_response`.

        Args:
            response: The attempt's response, its head arrived and its body unread, as the previous hook returned
                it.
            context: The call this attempt belongs to.

        Returns:
            ``response`` itself, or an object of the hook's own implementing the protocol."""
        return response


class SdkHooksDict(TypedDict):
    """The synchronous client's hooks as plain functions, keyed by the event each runs on.

    Closed and typed per key, so a misspelled event, or a response function under ``on_request``, is a type error
    where it is written. Nothing checks the keys at run time: any other key is ignored."""

    on_request: NotRequired[Sequence[Callable[[HttpRequest, HookContext], HttpRequest]]]
    """Run before each attempt is sent, in order, each handed the request the previous one returned."""

    on_response: NotRequired[Sequence[Callable[[HttpResponse, HookContext], HttpResponse]]]
    """Run on each attempt's response, in order, each handed the response the previous one returned."""


class AsyncSdkHooksDict(TypedDict):
    """The asynchronous twin of :class:`SdkHooksDict`: each function is a coroutine function, awaited."""

    on_request: NotRequired[Sequence[Callable[[HttpRequest, AsyncHookContext], Awaitable[HttpRequest]]]]
    """Awaited before each attempt is sent, in order, each handed the request the previous one returned."""

    on_response: NotRequired[Sequence[Callable[[AsyncHttpResponse, AsyncHookContext], Awaitable[AsyncHttpResponse]]]]
    """Awaited on each attempt's response, in order, each handed the response the previous one returned."""


def _coerce_hooks(hooks: Sequence[SdkHook] | SdkHooksDict | None) -> tuple[SdkHook, ...]:
    """Return the synchronous client's hooks as the tuple a call runs.

    ``None`` is none, a sequence is taken as given, and a dict of functions becomes one hook per function, the
    ``on_request`` ones first, each passing the other event through untouched; any other key is ignored. Private
    to the runtime, with two callers: the raw client's ``execute``, for the client's hooks and the call's, and
    ``RequestOptions``, as the validator of its ``hooks`` field -- so a call's hooks are resolved when its options
    are built and ``execute`` is handed that tuple back.

    Args:
        hooks: Hook objects, functions keyed by event, or ``None`` for none.

    Returns:
        The hooks, in the order they run; empty for ``None``."""
    if hooks is None:
        return ()
    if not isinstance(hooks, Mapping):
        return tuple(hooks)
    return (
        *(_DelegateHook(on_request=hook) for hook in hooks.get("on_request", ())),
        *(_DelegateHook(on_response=hook) for hook in hooks.get("on_response", ())),
    )


def _async_coerce_hooks(hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None) -> tuple[AsyncSdkHook, ...]:
    """The asynchronous twin of :func:`_coerce_hooks`, with that contract exactly, over :class:`AsyncSdkHooksDict`.

    Args:
        hooks: Hook objects, coroutine functions keyed by event, or ``None`` for none.

    Returns:
        The hooks, in the order they run; empty for ``None``."""
    if hooks is None:
        return ()
    if not isinstance(hooks, Mapping):
        return tuple(hooks)
    return (
        *(_AsyncDelegateHook(on_request=hook) for hook in hooks.get("on_request", ())),
        *(_AsyncDelegateHook(on_response=hook) for hook in hooks.get("on_response", ())),
    )


@dataclass(frozen=True, slots=True)
class _DelegateHook:
    """A synchronous hook made of one function of an :class:`SdkHooksDict`; the other event passes through."""

    on_request: Callable[[HttpRequest, HookContext], HttpRequest] | None = None
    on_response: Callable[[HttpResponse, HookContext], HttpResponse] | None = None

    def before_request(self, request: HttpRequest, context: HookContext) -> HttpRequest:
        return request if self.on_request is None else self.on_request(request, context)

    def after_response(self, response: HttpResponse, context: HookContext) -> HttpResponse:
        return response if self.on_response is None else self.on_response(response, context)


@dataclass(frozen=True, slots=True)
class _AsyncDelegateHook:
    """The awaiting twin of :class:`_DelegateHook`."""

    on_request: Callable[[HttpRequest, AsyncHookContext], Awaitable[HttpRequest]] | None = None
    on_response: Callable[[AsyncHttpResponse, AsyncHookContext], Awaitable[AsyncHttpResponse]] | None = None

    async def before_request(self, request: HttpRequest, context: AsyncHookContext) -> HttpRequest:
        return request if self.on_request is None else await self.on_request(request, context)

    async def after_response(self, response: AsyncHttpResponse, context: AsyncHookContext) -> AsyncHttpResponse:
        return response if self.on_response is None else await self.on_response(response, context)
