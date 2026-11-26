"""What to retry, how long to wait, and when to stop.

Decisions only, never action: the loop that sleeps and sends again is ``raw_client.execute``, and
this module is what it asks. That is what makes every rule here testable without a transport.

A retry is safe only when two things hold, and both are answered here: the request may be repeated
without knowing whether the server acted on it -- a method the caller nominated, failing in a way
the policy names -- and its body can go out again byte for byte (:func:`is_retryable_body`)."""

from __future__ import annotations

import random
from collections.abc import Mapping
from collections.abc import Set as AbstractSet
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path
from typing import Annotated, TypeAlias

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ._internal.headers import find_header
from .bodies import BinaryBody, FormBody, JsonBody, MultipartBody, MultipartFile, RequestBody, TextBody
from .transport import HttpMethod

# This policy's bounds, each declared once as an alias. ``MaxRetries`` is the one the per-call layer
# shares: ``RequestOptions`` spells the same field as ``MaxRetries | None`` and the two must not be
# able to drift, because the merge there copies a caller's value onto this policy *without*
# revalidating it -- sound only while the bound that admitted the value is the bound governing the
# field it lands on. A value out of range reaching the loop is not a rejected call but a malformed
# one: a negative ``max_retries`` empties ``range(max_retries + 1)``, so ``execute`` sends nothing at
# all. The four curve bounds are the client's alone and are aliased for uniformity;
# ``status_codes_to_retry`` has no alias because it has no bound to single-source -- but it shares a
# *type* the same way: ``AbstractSet[int]`` at both boundaries, stored by pydantic as a ``frozenset``,
# so the copy lands a ``frozenset`` on a field that already holds one.
MaxRetries: TypeAlias = Annotated[int, Field(ge=0)]
InitialDelay: TypeAlias = Annotated[float, Field(gt=0)]
BackoffFactor: TypeAlias = Annotated[float, Field(ge=1)]
MaxDelay: TypeAlias = Annotated[float, Field(gt=0)]
MaxJitter: TypeAlias = Annotated[float, Field(ge=0)]


class RetryOptions(BaseModel):
    """How many times to retry, how long to wait, and which failures qualify.

    Caller input, so its constraints are declared rather than hand-written, exactly as they are on
    :class:`~.request_options.RequestOptions`. The field counts *retries*, not attempts, so
    ``max_retries=0`` disables retrying -- the spelling Stainless, Fern and APIMatic v1 all use, so a
    count reads the same wherever a caller met it before. The loop adds the initial attempt.

    Retries are counted rather than time budgeted. A wall-clock budget makes the elapsed time
    predictable and the attempt count arbitrary; counting retries makes the worst case
    ``max_retries + 1`` timeouts plus the delays between them -- every term of which the caller set.

    One status set under one method gate, and the gate covers a request that produced no response
    too. A 5xx or a 408 says the server may have processed the request; a dropped connection leaves
    that unknown; and a 429, though a refusal, is gated the same way rather than given a set of its
    own. Nothing is repeated for a method outside ``http_methods_to_retry``; a caller whose API honors
    the ``Idempotency-Key`` this SDK already sends on every non-GET declares that by adding ``POST``."""

    model_config = ConfigDict(frozen=True, extra="forbid")

    max_retries: MaxRetries = 3
    """Retries after the initial attempt. ``0`` disables retrying."""

    initial_delay: InitialDelay = 1.0
    """Seconds to wait before the first retry, before jitter."""

    backoff_factor: BackoffFactor = 2.0
    """Multiplier applied per attempt. ``1`` makes the delay constant."""

    max_delay: MaxDelay = 60.0
    """Ceiling for one wait: the curve is capped at it, and a longer ``Retry-After`` is trimmed to it."""

    max_jitter: MaxJitter = 0.5
    """Widest random addition to one wait, in seconds. ``0`` makes the curve exact."""

    status_codes_to_retry: AbstractSet[int] = frozenset({408, 429, 500, 502, 503, 504})
    """Statuses that qualify for a retry -- for a method in ``http_methods_to_retry``, never otherwise."""

    http_methods_to_retry: AbstractSet[HttpMethod] = frozenset({"GET", "HEAD", "PUT", "OPTIONS"})
    """Methods safe to repeat blind. Add ``POST`` when the API honours our ``Idempotency-Key``."""

    @classmethod
    def coerce(cls, retry: int | RetryOptionsOrDict | None) -> RetryOptions:
        """Return ``retry`` as a :class:`RetryOptions`, whichever spelling it arrived in.

        An instance passes straight through -- it validated itself when it was built -- and ``None``
        yields ``RetryOptions()``, because **retrying is on by default**: a caller who
        configured nothing gets the tuned policy, three retries on the idempotent methods. Turning it
        off is ``0`` (or ``{"max_retries": 0}``); asking with a count alone is a bare ``int``, which is
        ``max_retries`` and leaves every other field at its default. It is handed to that field
        unexamined, so it coerces exactly as ``max_retries`` does -- a ``bool`` included, ``True`` being
        one retry -- and no rule here is stricter or laxer than the field it stands for.

        Args:
            retry: A retry count, the policy in either spelling, or ``None`` for the tuned
                defaults. It is the client's own ``retry_options`` argument, whichever spelling it
                arrived in; a single call overrides the policy it yields field by field, through
                the flat terms on :class:`~.request_options.RequestOptions`.

        Returns:
            A validated :class:`RetryOptions`; ``RetryOptions()`` when ``retry`` is ``None``.

        Raises:
            ValidationError: If ``retry`` carries an unknown key or an out-of-range value -- a
                negative count included. It subclasses ``ValueError``, so a caller catching that
                still covers this."""
        if retry is None:
            return cls()
        if isinstance(retry, int):
            return cls(max_retries=retry)
        if isinstance(retry, cls):
            return retry
        return cls.model_validate(retry)


class RetryOptionsDict(TypedDict):
    """The dict-shaped spelling of :class:`RetryOptions`, mirroring it field for field.

    Closed and typed per key, which is what makes ``{"max_retires": 2}`` a type error at the call
    site rather than a surprise at runtime."""

    max_retries: NotRequired[int]
    initial_delay: NotRequired[float]
    backoff_factor: NotRequired[float]
    max_delay: NotRequired[float]
    max_jitter: NotRequired[float]
    status_codes_to_retry: NotRequired[AbstractSet[int]]
    http_methods_to_retry: NotRequired[AbstractSet[HttpMethod]]


RetryOptionsOrDict: TypeAlias = RetryOptions | RetryOptionsDict
"""The typed policy, or a dict carrying the same keys -- the two spellings the companion covers."""


def backoff_seconds(retries_taken: int, retry_options: RetryOptions) -> float:
    """The curve's wait after ``retries_taken`` retries, plus a random addition up to ``max_jitter``.

    The exponential curve is the floor and the jitter sits on top of it. ``max_delay`` bounds the
    **sum**, so a wait never exceeds it and the jitter is what the cap swallows first: every attempt
    whose curve has reached the ceiling waits exactly ``max_delay``.

    That includes a curve too large for a float. ``float ** int`` raises ``OverflowError`` rather
    than answering infinity -- a factor of 2 does from the 1024th retry -- and the loop asks for this
    wait while it still holds the discarded response, outside its close guard. So this never raises:
    an overflow is read as past the ceiling.

    Args:
        retries_taken: How many retries this call has already made; ``0`` for the first one.
        retry_options: The policy in force for this call.

    Returns:
        Seconds to wait: the curve plus ``0.0`` to ``max_jitter``, capped at ``max_delay``."""
    try:
        backoff_sec = retry_options.initial_delay * retry_options.backoff_factor**retries_taken
    except OverflowError:
        backoff_sec = retry_options.max_delay
    return min(backoff_sec + random.uniform(0.0, retry_options.max_jitter), retry_options.max_delay)


def is_retryable_body(body: RequestBody | None) -> bool:
    """Whether ``body`` can be sent again byte for byte.

    ``None``, JSON, form and text bodies always can: each already holds its wire bytes. The two that
    carry caller-held content -- a raw binary body, and a multipart body's file parts -- are each
    asked about their content.

    A multipart body's text parts are not consulted: they hold their bytes. One non-retryable file part
    disqualifies the whole body, because the parts are encoded as a single stream.

    Args:
        body: The body the endpoint built, or ``None`` for a request that carries none.

    Returns:
        ``True`` only for a shape proven re-sendable."""
    match body:
        case None | JsonBody() | FormBody() | TextBody():
            return True
        case BinaryBody(content=content):
            return isinstance(content, (bytes, bytearray, Path))
        case MultipartBody(parts=parts):
            return all(
                isinstance(part.content, (bytes, bytearray, Path)) for part in parts if isinstance(part, MultipartFile)
            )


def retry_after_seconds(headers: Mapping[str, str], now: datetime) -> float | None:
    """Seconds named by ``Retry-After``, or ``None`` if the header is absent or unusable.

    Both RFC 9110 forms are read: delta-seconds, and an HTTP-date. A date already past floors at
    ``0.0`` -- the server is naming a moment, and a moment gone means *now*.

    Delta-seconds is read exactly as the grammar writes it, ``1*DIGIT``, and never through bare
    ``float`` -- which would take ``1_0`` as ten, ``inf`` as a wait beyond any ceiling, and ``1.5``
    and ``-5`` as values the grammar has no room for. So a non-conforming value is *unparseable*
    rather than quietly reinterpreted, and the floor above is the date branch's alone.

    An unparseable value yields ``None`` rather than raising. A malformed header is the server's
    defect, and turning a retryable failure into an exception would make the SDK's behavior worse
    than if the header had never been sent.

    The clock is the caller's: ``now`` is read once in ``raw_client.execute``, immediately after the
    head arrives, and handed over. So the one branch that needs a reference moment names it as an
    argument rather than reaching for a global, which keeps this module free of ambient state and
    makes the date branch testable by passing a moment instead of patching ``datetime``.

    The field is found case-insensitively rather than by ``headers.get("retry-after")``. Both
    response protocols oblige a transport to lowercase its header names, and the shipped one does --
    but a custom transport that forgets would not fail here, it would silently ignore every
    ``Retry-After`` a server sends and wait out the curve instead. That is the kind of defect a
    caller never sees, so the one reader of a response header pays a scan of the head to be
    independent of the obligation. The scan runs only on a retryable failure.

    Args:
        headers: The failing response's head, scanned case-insensitively for the field.
        now: The moment an HTTP-date is measured against -- the loop's own reading of the clock,
            taken when the head arrived. Unused by the delta-seconds form.

    Returns:
        Seconds to wait, never negative; ``None`` where the header is absent or unusable."""
    token = find_header(headers, "Retry-After")
    if token is None:
        return None
    # ``isdigit`` alone would take a non-ASCII digit; ``isascii`` fences the pair to ``[0-9]+``.
    if token.isascii() and token.isdigit():
        return float(token)
    try:
        when = parsedate_to_datetime(token)
    except (TypeError, ValueError):
        return None
    # A date with no zone is UTC by RFC 9110: HTTP-dates are always GMT, and the one legacy format
    # parsedate_to_datetime accepts without a zone would otherwise subtract as naive and raise.
    if when.tzinfo is None:
        when = when.replace(tzinfo=timezone.utc)
    return max(0.0, (when - now).total_seconds())
