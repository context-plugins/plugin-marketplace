"""Per-call request options -- the SDK's one override channel.

Every endpoint takes an optional ``request_options``, so a caller can override request-scoped
behaviour for a single call without re-configuring the client::

    client.body_params.send_long(5, request_options={"timeout": 5.0})

One bundled parameter rather than a keyword per knob. That is what keeps the set of names a
generated endpoint reserves at exactly one, however many options are added later: a new option is a
field here and collides with nobody's parameter.

Twinned by flavour, as the clients are: :class:`RequestOptions` for the synchronous client and
:class:`AsyncRequestOptions` for the asynchronous one. They differ in one field, ``hooks``, whose type
is the flavour's own hook -- so a hook the other client would have to run is a build failure at the call
site rather than a surprise when it runs. Every other field is declared once, on :class:`BaseRequestOptions`,
which both extend, so the two cannot drift. An endpoint names its flavour's alias, ``RequestOptionsOrDict`` or
``AsyncRequestOptionsOrDict``, exactly as it names its flavour's ``FileInput``.

Accepted either typed or dict-shaped, the same either-spelling convention the model input companions
use. Each twin's ``coerce`` is the one place its dict form is resolved, so the two spellings cannot
produce different requests.

A validated model rather than a plain frozen dataclass, because of who supplies the value: this is
caller input, so its constraints and its unknown-key rejection are declared here rather than
hand-written, exactly as they are for the configuration models. What the runtime *builds* --
including the resolved timeout that reaches a transport on :class:`HttpRequest` -- stays a plain
dataclass field, so no model crosses the transport boundary."""

from __future__ import annotations

from collections.abc import Mapping, Sequence
from collections.abc import Set as AbstractSet
from typing import Annotated, Final, TypeAlias

from pydantic import BaseModel, ConfigDict, Field, PlainValidator
from typing_extensions import NotRequired, TypedDict

from .hooks import AsyncSdkHook, AsyncSdkHooksDict, SdkHook, SdkHooksDict, _async_coerce_hooks, _coerce_hooks
from .retries import MaxRetries, RetryOptions


class BaseRequestOptions(BaseModel):
    """The overrides both clients take for a single request -- every option but ``hooks``.

    Never built by a caller and never named in an emitted signature: a caller builds one of the two twins, and an
    endpoint names its flavour's. The runtime names it wherever either twin will do -- :func:`apply_retry_overrides`
    and ``BaseRawClient._build_request`` -- since each reads only the fields the twins share, as ``BaseRawClient``
    is named where either raw client will do. A hook is handed its own flavour's twin instead, on ``HookContext`` /
    ``AsyncHookContext``. ``frozen`` matches every other value type in the runtime; ``extra="forbid"`` rejects a
    misspelled option that reached here without a type checker having seen the call.

    The retry terms are spelled **flat**, under the names :class:`~.retries.RetryOptions` gives them,
    and each one **merges** onto the client's policy rather than replacing it
    (:func:`apply_retry_overrides`, below): a field left ``None`` is a field the caller did not set,
    and the client's value stands. So overriding one term costs one key -- ``{"max_retries": 0}``
    turns retrying off for this call and moves nothing else -- where a nested policy obliged the
    caller to restate every term they were happy with in order to change one.

    Of the retry terms, only the two that vary by call site are here: how many times *this* call may
    be retried, and which statuses count as transient for *this* endpoint. The wait curve --
    ``initial_delay``, ``backoff_factor``, ``max_delay``, ``max_jitter`` -- describes how the server
    recovers, a fact about the API rather than about one call, and ``http_methods_to_retry`` is fixed
    by the method an endpoint was emitted with, so a per-call set could only agree with it or disable
    this call's retrying by a second route. All five stay the client's alone.

    ``log_level`` is the third per-call term: how loud *this* call may be, read where a call's log
    scope is opened. ``hooks``, the fourth, is each twin's own."""

    model_config = ConfigDict(frozen=True, extra="forbid")

    timeout: float | None = Field(default=None, gt=0)
    """Seconds to wait for this one request. ``None`` leaves the client's own timeout in force."""

    extra_headers: Mapping[str, str] | None = Field(default=None, repr=False)
    """Headers added to this one request, winning over both the API's and the endpoint's own. Kept out of the
    repr: this layer wins over auth, so it is where a per-call ``Authorization`` goes, and a hook is handed these
    options on its context."""

    max_retries: MaxRetries | None = None
    """Retries after the initial attempt of this one request. ``0`` turns retrying off for it."""

    status_codes_to_retry: AbstractSet[int] | None = None
    """Statuses that qualify for a retry of this request, under the client's method gate."""

    log_level: int | None = Field(default=None, ge=0)
    """A floor for this one call's log records: a ``logging`` level. Records below it are not written;
    records at or above it are written when the logger's own level and the client's flags allow them. It
    silences, and never turns a dump or the body on. ``None`` leaves every event to the client's options."""


class RequestOptions(BaseRequestOptions):
    """Overrides that apply to a single request on the synchronous client.

    Every option but ``hooks`` is shared with :class:`AsyncRequestOptions` and documented on
    :class:`BaseRequestOptions`; this twin's ``hooks`` are :class:`~.hooks.SdkHook`, or plain functions keyed by
    event (:class:`~.hooks.SdkHooksDict`), which is what makes an awaiting hook here a type error at the call
    site."""

    hooks: Annotated[Sequence[SdkHook] | SdkHooksDict | None, PlainValidator(_coerce_hooks)] = None
    """Hooks for this one call, run on every attempt after the client's -- appended, never substituted, so a call
    cannot switch off what the client installed."""

    @classmethod
    def coerce(cls, options: RequestOptionsOrDict | None) -> RequestOptions:
        """Return ``options`` as a :class:`RequestOptions`, dict-shaped input included.

        An instance passes straight through -- it validated itself when it was built -- and ``None``
        yields the shared empty options rather than ``None`` itself, so the path every call that
        overrides nothing takes neither validates nor allocates, and every read downstream stays
        unconditional as fields are added.

        Everything else is validated, an empty mapping and a falsy value of the wrong type included.
        ``None`` is the only short circuit deliberately: a caller no type checker saw is exactly who
        this validation is for, and absorbing their ``False`` or ``()`` as "no overrides" would
        leave them believing an override took effect.

        Args:
            options: The caller's per-call overrides, in either spelling, or ``None`` for none.

        Returns:
            A validated :class:`RequestOptions`; the shared empty instance when ``options`` is
            ``None``.

        Raises:
            ValidationError: If ``options`` carries an unknown key or an out-of-range value. It
                subclasses ``ValueError``, so a caller catching that still covers this."""
        if isinstance(options, cls):
            return options
        if options is None:
            return _NO_OPTIONS
        return cls.model_validate(options)


class AsyncRequestOptions(BaseRequestOptions):
    """Overrides that apply to a single request on the asynchronous client.

    The twin of :class:`RequestOptions`, differing in ``hooks`` alone, whose elements are
    :class:`~.hooks.AsyncSdkHook` -- so a synchronous hook, whose ``after_response`` expects an
    ``HttpResponse``, is a type error here rather than a hook handed an ``AsyncHttpResponse``."""

    hooks: Annotated[Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None, PlainValidator(_async_coerce_hooks)] = None
    """Hooks for this one call, run on every attempt after the client's -- appended, never substituted, so a call
    cannot switch off what the client installed."""

    @classmethod
    def coerce(cls, options: AsyncRequestOptionsOrDict | None) -> AsyncRequestOptions:
        """The asynchronous twin of :meth:`RequestOptions.coerce`, with that contract exactly: an instance passes
        through, ``None`` yields the shared empty options, and everything else is validated."""
        if isinstance(options, cls):
            return options
        if options is None:
            return _NO_ASYNC_OPTIONS
        return cls.model_validate(options)


class _RequestOptionsDictBase(TypedDict):
    """The dict-shaped spelling of the shared options, mirroring :class:`BaseRequestOptions` field for field.

    Closed and typed per key, which is what makes ``request_options={"timeuot": 1}`` a type error at
    the call site rather than a surprise at runtime."""

    timeout: NotRequired[float | None]
    extra_headers: NotRequired[Mapping[str, str] | None]
    max_retries: NotRequired[int | None]
    status_codes_to_retry: NotRequired[AbstractSet[int] | None]
    log_level: NotRequired[int | None]


class RequestOptionsDict(_RequestOptionsDictBase):
    """The dict-shaped spelling of :class:`RequestOptions`."""

    hooks: NotRequired[Sequence[SdkHook] | SdkHooksDict | None]


class AsyncRequestOptionsDict(_RequestOptionsDictBase):
    """The dict-shaped spelling of :class:`AsyncRequestOptions`."""

    hooks: NotRequired[Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None]


RequestOptionsOrDict: TypeAlias = RequestOptions | RequestOptionsDict
"""What a synchronous endpoint accepts: the typed options, or a dict carrying the same keys.

Aliased rather than spelled out at each call site, so every emitted signature stays on one line; one
alias per flavour, as the clients are one class per flavour."""

AsyncRequestOptionsOrDict: TypeAlias = AsyncRequestOptions | AsyncRequestOptionsDict
"""What an asynchronous endpoint accepts: the typed options, or a dict carrying the same keys."""

_NO_OPTIONS: Final = RequestOptions()
"""The empty options, built once -- the default path for every synchronous call that overrides nothing."""

_NO_ASYNC_OPTIONS: Final = AsyncRequestOptions()
"""The empty options, built once -- the default path for every asynchronous call that overrides nothing."""


def apply_retry_overrides(options: BaseRequestOptions, retry_options: RetryOptions) -> RetryOptions:
    """Return the client's policy with one call's retry overrides applied.

    A function rather than a method, and not re-exported from ``core/__init__.py``: the two terms are
    a caller's to *write*, but folding them onto a policy is the raw client's business, and nothing a
    caller holds should offer it. The runtime's one caller is ``raw_client.execute``, once per
    request, in both flavours -- which is why it takes :class:`BaseRequestOptions`: it reads only the fields
    the twins share.

    The terms are a *layer over* ``retry_options``, never a policy of their own: each one the caller
    set replaces the client's value for this request, and each left ``None`` leaves the client's
    standing. ``None`` is therefore **unset rather than a value** -- the same reading ``timeout`` has,
    and the reading the dict spelling requires, since an omitted key and ``{"max_retries": None}``
    cannot be allowed to mean different things once the companion accepts both. The cost of that is
    one thing a caller cannot say: there is no per-call way to put a field *back* to the policy's own
    default, only to name the value they want.

    The client's policy is copied rather than rebuilt, which is what keeps this merge correct as the
    policy grows: a field this function has never heard of keeps the client's value instead of
    silently falling back to its class default. It is copied rather than revalidated because the
    overriding values were already validated against the very bounds ``RetryOptions`` declares --
    both models name ``MaxRetries``, and a status set has no bound -- so there is nothing left to
    re-check.

    A call that overrode nothing gets the client's own instance back, unwrapped and unallocated; that
    is the path every request takes.

    Args:
        options: The caller's per-call overrides, already coerced.
        retry_options: The client's policy -- what governs every term this call is silent about.

    Returns:
        The client's policy where this call is silent and the caller's value at each field they set;
        ``retry_options`` itself when they set none."""
    overrides = {
        name: value
        for name, value in (
            ("max_retries", options.max_retries),
            ("status_codes_to_retry", options.status_codes_to_retry),
        )
        if value is not None
    }
    return retry_options.model_copy(update=overrides) if overrides else retry_options
