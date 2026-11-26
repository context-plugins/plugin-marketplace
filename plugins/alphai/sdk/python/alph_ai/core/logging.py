"""HTTP logging: what a caller may ask the runtime to say, and the logger it says it through.

Everything reaches the standard ``logging`` module under this module's own logger, so an application
configures the SDK's output as it configures any library's -- a level and a handler on the package
logger -- and nothing here adds a handler to any other logger, sets a level, or touches the root.
Off by default: the ``NullHandler`` below means that with no configuration a record is dropped here
rather than reaching ``logging``'s last-resort stderr handler. The one exception is the operator's own
word: ``<PACKAGE>_LOG``, read by :meth:`LoggingOptions.coerce` once per client when the generated client
names its package, does to the package logger what the application would -- sets its level and gives it
the stderr fallback, a handler that prints a record only where no other handler would receive it, by
``logging.lastResort``'s own rule, decided as each record is written -- and turns the flags on for
``debug``. It never touches another logger, and never turns a flag off.

The options are caller input and are validated once, at the client. What is written, and when, is
the business of one object, :class:`HttpLog`: ``execute`` opens one per call and reports a call that
ends in an exception (but not a body its decoder or mapper rejects), the callable that builds and sends
an attempt reports each request to it, and the retry loop reports each response head and each retry. A
token-endpoint request is logged like any other, because it runs through the same loop."""

from __future__ import annotations

import logging
import os
import time
from collections.abc import Mapping, Sequence
from collections.abc import Set as AbstractSet
from dataclasses import dataclass, field
from http import HTTPStatus
from typing import TypeAlias

from pydantic import BaseModel, ConfigDict, Field, field_validator
from typing_extensions import NotRequired, TypedDict

from ._internal.redaction import DEFAULT_PLACEHOLDER, base_name, redact_form, redact_headers, redact_url
from .bodies import BinaryBody, FormBody, JsonBody, MultipartBody, MultipartFile, MultipartPart, MultipartText, TextBody
from .files import AsyncBinaryContent
from .transport import HttpRequest

logger = logging.getLogger(__name__)
"""The one logger the runtime writes through. Configure it by name; the SDK never does."""
logger.addHandler(logging.NullHandler())


def _only_the_fallback_listens(record: logging.LogRecord) -> bool:
    """``logging.lastResort``'s rule, for the stderr fallback: a record passes only when no handler but the fallback
    is attached on the path ``callHandlers`` walks -- the record's logger, then its ancestors while ``propagate``
    holds. A ``NullHandler`` is never a listener, since the SDK's own would otherwise silence the fallback; any
    other handler is one by being attached, whatever its level or filters say, because either is the
    application's choice. Decided per record, so an application that configures logging after the client was
    built is seen the moment it does. Runs as a filter, before the handler's lock, so asking ``getLogger`` for the
    module lock never nests under it."""
    node: logging.Logger | None = logging.getLogger(record.name)
    while node is not None:
        if any(h is not _stderr_fallback and not isinstance(h, logging.NullHandler) for h in node.handlers):
            return False
        if not node.propagate:
            break
        node = node.parent
    return True


_stderr_fallback = logging.StreamHandler()
"""The one handler ``<PACKAGE>_LOG`` attaches to the package logger: a module-level object, so ``addHandler`` --
idempotent under ``logging``'s own lock -- makes a second client, or a second thread, add nothing."""
_stderr_fallback.setFormatter(logging.Formatter(logging.BASIC_FORMAT))
_stderr_fallback.addFilter(_only_the_fallback_listens)


class LoggingOptions(BaseModel):
    """What the SDK may put in its log records, beyond the request and response lines.

    Caller input, so a pydantic model: the bounds on ``body_size_limit`` and ``redaction_placeholder`` and the
    unknown-key rejection are declared, not handwritten, exactly as on :class:`~.retries.RetryOptions`. The
    three flags default off -- headers and a body are opt-in; the placeholder defaults to the standard's
    ``REDACTED`` and may not be empty. Every name set is lowercased once here, so the comparisons downstream
    are case-insensitive by construction."""

    model_config = ConfigDict(frozen=True, extra="forbid")

    log_request_headers: bool = False
    """Dump the sent headers at DEBUG, masked. Off by default."""

    log_response_headers: bool = False
    """Dump the received headers at DEBUG, masked. Off by default."""

    log_request_body: bool = False
    """Log the request body at DEBUG: its text when in memory, a description when streamed. Off by default."""

    body_size_limit: int = Field(default=32 * 1024, gt=0)
    """Bytes of a printed body kept before it is cut, on a character boundary; a multipart body is cut part by part."""

    redaction_placeholder: str = Field(default=DEFAULT_PLACEHOLDER, min_length=1)
    """What a hidden header value, query value or form field prints as; never empty."""

    unmask_headers: AbstractSet[str] = frozenset()
    """Header names shown even though they are not on the safe list."""

    mask_headers: AbstractSet[str] = frozenset()
    """Header names hidden even though they are on the safe list."""

    mask_keys: AbstractSet[str] = frozenset(
        {
            "sig",
            "signature",
            "access_token",
            "apikey",
            "api_key",
            "client_secret",
            "password",
            "refresh_token",
            "code",
            "assertion",
            "client_assertion",
        }
    )
    """Query-string, form-body and multipart-field keys whose values are always hidden: the OAuth 2.0 credential
    and assertion parameters, the two common api-key spellings and a signed URL's signature. A URL's query hides
    every key outside the known-safe vocabulary anyway, so this list matters there only for a known-safe key."""

    @field_validator("unmask_headers", "mask_headers", "mask_keys")
    @classmethod
    def _lowercase_names(cls, names: AbstractSet[str]) -> frozenset[str]:
        return frozenset(name.lower() for name in names)

    @classmethod
    def coerce(cls, options: LoggingOptionsOrDict | None, *, package: str | None = None) -> LoggingOptions:
        """Return ``options`` as a :class:`LoggingOptions`, whichever spelling it arrived in, with the
        environment's word laid over it where ``package`` is named.

        ``<PACKAGE>_LOG`` -- ``ACME_LOG`` for the package ``acme`` -- is read once here, trimmed and
        lowercased. ``info`` sets the package logger to INFO; ``debug`` sets it to DEBUG and turns the three
        flags on. Either attaches the stderr fallback to that logger, which prints a record only when no other
        handler would receive it, decided as the record is written -- so a bare script prints, and an application
        that configures logging, before or after the client is built, keeps its own output once. The level is the
        word's, whatever was set before; the flags only turn on, so a flag the caller set stays, and the masks,
        the limit and the placeholder are the caller's. Any other value, or none, changes nothing. The fallback
        is one object, so a second client, or a second thread, adds nothing. An application's ``dictConfig`` with
        ``disable_existing_loggers`` left on silences the package logger entirely, which is its choice.

        Args:
            options: The typed options, the dict spelling, or ``None`` for the defaults.
            package: The top-level package whose logger the environment may switch on -- the name an
                application configures. ``None`` consults no environment.

        Returns:
            A validated :class:`LoggingOptions`; ``LoggingOptions()`` when ``options`` is ``None``; the flags on
            over either when the environment says ``debug``.

        Raises:
            ValidationError: If ``options`` carries an unknown key or an out-of-range value."""
        if options is None:
            resolved = cls()
        elif isinstance(options, cls):
            resolved = options
        else:
            resolved = cls.model_validate(options)
        if package is None:
            return resolved

        level_name = os.environ.get(f"{package.upper()}_LOG", "").strip().lower()
        if level_name not in ("info", "debug"):
            return resolved
        package_logger = logging.getLogger(package)
        package_logger.setLevel(level_name.upper())
        package_logger.addHandler(_stderr_fallback)
        if level_name == "info":
            return resolved
        return resolved.model_copy(
            update={"log_request_headers": True, "log_response_headers": True, "log_request_body": True}
        )


class LoggingOptionsDict(TypedDict):
    """The dict-shaped spelling of :class:`LoggingOptions`, mirroring it field for field."""

    log_request_headers: NotRequired[bool]
    log_response_headers: NotRequired[bool]
    log_request_body: NotRequired[bool]
    body_size_limit: NotRequired[int]
    redaction_placeholder: NotRequired[str]
    unmask_headers: NotRequired[AbstractSet[str]]
    mask_headers: NotRequired[AbstractSet[str]]
    mask_keys: NotRequired[AbstractSet[str]]


LoggingOptionsOrDict: TypeAlias = LoggingOptions | LoggingOptionsDict
"""The typed options, or a dict carrying the same keys."""


@dataclass(slots=True, kw_only=True)
class HttpLog:
    """One call's log scope: the attempt it last reported, and the four events that write its records.

    ``execute`` opens one per call and reports a call that ends in an exception (:meth:`failed`), except a body its
    decoder or mapper rejects; the callable that builds and sends an attempt reports each request
    (:meth:`request_sending`); the retry loop reports each response
    head, saying whether it is a success (:meth:`response_received`, which keeps no status rule of its own), and
    each retry (:meth:`retrying`). It is mutable for one reason: it remembers the method, the printable URL and the
    attempt count, so the loop never holds a request. Every record first asks :meth:`_is_enabled_for`, and a dump or
    the body adds its own flag; the call's ``log_level_override`` is a floor that silences and never turns a dump on
    (ADR-0068). The masking rules live in ``_internal/redaction.py``."""

    options: LoggingOptions
    log_level_override: int | None
    started_at: float

    method: str = field(default="", init=False)
    url: str = field(default="", init=False)
    attempts: int = field(default=0, init=False)
    sent_at: float = field(default=0.0, init=False)

    def request_sending(self, request: HttpRequest) -> None:
        self.method = request.method
        # Rendered when any record could pass the level checks. ERROR is the highest level this scope writes at,
        # so a record added above ERROR must raise this gate.
        self.url = (
            redact_url(request.url, mask_keys=self.options.mask_keys, placeholder=self.options.redaction_placeholder)
            if self._is_enabled_for(logging.ERROR)
            else ""
        )
        self.attempts += 1

        if self._is_enabled_for(logging.INFO):
            fields: dict[str, object] = {"http.request.method": self.method, "url.full": self.url}
            if self.attempts > 1:
                fields["http.request.resend_count"] = self.attempts - 1
            logger.info("HTTP %(http.request.method)s %(url.full)s", fields, extra=fields)

        if self.options.log_request_headers and self._is_enabled_for(logging.DEBUG):
            fields = {"http.request.method": self.method, "url.full": self.url}
            if self.attempts > 1:
                fields["http.request.resend_count"] = self.attempts - 1
            redacted_headers = redact_headers(
                request.headers,
                unmask=self.options.unmask_headers,
                mask=self.options.mask_headers,
                placeholder=self.options.redaction_placeholder,
            )
            header_fields = {
                **fields,
                **{f"http.request.header.{name}": [value] for name, value in redacted_headers.items()},
            }
            header_lines = "".join(f"\n  {name}: {value}" for name, value in redacted_headers.items())
            logger.debug(
                "request headers:%(header_lines)s",
                {**header_fields, "header_lines": header_lines},
                extra=header_fields,
            )

        if self.options.log_request_body and self._is_enabled_for(logging.DEBUG):
            fields = {"http.request.method": self.method, "url.full": self.url}
            if self.attempts > 1:
                fields["http.request.resend_count"] = self.attempts - 1
            content_type = request.headers.get("content-type", "")
            match request.body:
                case JsonBody(content, _):
                    body_fields = {
                        **fields,
                        "http.request.header.content-type": [content_type],
                        "http.request.body.content": _body_text(content, "utf-8", self.options.body_size_limit),
                        "http.request.body.size": len(content),
                    }
                    logger.debug(
                        "request body (%(content_type)s): %(http.request.body.content)s",
                        {**body_fields, "content_type": content_type},
                        extra=body_fields,
                    )
                case FormBody(content):
                    redacted_form = redact_form(
                        content, mask_keys=self.options.mask_keys, placeholder=self.options.redaction_placeholder
                    )
                    body_fields = {
                        **fields,
                        "http.request.header.content-type": [content_type],
                        "http.request.body.content": _body_text(redacted_form, "utf-8", self.options.body_size_limit),
                        "http.request.body.size": len(content),
                    }
                    logger.debug(
                        "request body (%(content_type)s): %(http.request.body.content)s",
                        {**body_fields, "content_type": content_type},
                        extra=body_fields,
                    )
                case TextBody(content, _, charset):
                    body_fields = {
                        **fields,
                        "http.request.header.content-type": [content_type],
                        "http.request.body.content": _body_text(content, charset, self.options.body_size_limit),
                        "http.request.body.size": len(content),
                    }
                    logger.debug(
                        "request body (%(content_type)s): %(http.request.body.content)s",
                        {**body_fields, "content_type": content_type},
                        extra=body_fields,
                    )
                case BinaryBody(content, filename, _):
                    size = _buffered_size(content)
                    if size is not None:
                        fields["http.request.body.size"] = size
                    logger.debug(
                        "request body (%(content_type)s): %(description)s",
                        {**fields, "content_type": content_type, "description": _describe_file(content, filename)},
                        extra=fields,
                    )
                case MultipartBody(parts):
                    logger.debug(
                        "request body (%(content_type)s): %(description)s",
                        {
                            **fields,
                            "content_type": "multipart/form-data",
                            "description": _describe_parts(parts, self.options),
                        },
                        extra=fields,
                    )

        # The response line's clock starts here, after this attempt's records, so their cost is not in it.
        self.sent_at = time.perf_counter()

    def response_received(self, status_code: int, headers: Mapping[str, str], *, is_success: bool) -> None:
        level = logging.INFO if is_success else logging.WARNING
        if self._is_enabled_for(level):
            elapsed_seconds = time.perf_counter() - self.sent_at
            fields: dict[str, object] = {
                "http.request.method": self.method,
                "url.full": self.url,
                "http.response.status_code": status_code,
                "elapsed_seconds": elapsed_seconds,
            }
            if self.attempts > 1:
                fields["http.request.resend_count"] = self.attempts - 1
            logger.log(
                level,
                "HTTP %(http.request.method)s %(url.full)s -> %(http.response.status_code)d (%(elapsed_ms)d ms)",
                {**fields, "elapsed_ms": round(elapsed_seconds * 1000)},
                extra=fields,
            )

        if self.options.log_response_headers and self._is_enabled_for(logging.DEBUG):
            fields = {"http.request.method": self.method, "url.full": self.url}
            if self.attempts > 1:
                fields["http.request.resend_count"] = self.attempts - 1
            redacted_headers = redact_headers(
                headers,
                unmask=self.options.unmask_headers,
                mask=self.options.mask_headers,
                placeholder=self.options.redaction_placeholder,
            )
            header_fields = {
                **fields,
                **{f"http.response.header.{name}": [value] for name, value in redacted_headers.items()},
            }
            header_lines = "".join(f"\n  {name}: {value}" for name, value in redacted_headers.items())
            logger.debug(
                "response headers:%(header_lines)s",
                {**header_fields, "header_lines": header_lines},
                extra=header_fields,
            )

    def retrying(self, *, max_retries: int, delay: float, reason: int | BaseException) -> None:
        if not self._is_enabled_for(logging.WARNING):
            return

        if isinstance(reason, int):
            reason_text, error = _status_text(reason), None
        else:
            reason_text, error = type(reason).__name__, reason
        fields: dict[str, object] = {
            "http.request.method": self.method,
            "url.full": self.url,
            "attempt": self.attempts,
            "max_retries": max_retries,
            "delay_seconds": delay,
            "reason": reason_text,
        }
        if self.attempts > 1:
            fields["http.request.resend_count"] = self.attempts - 1
        if error is not None:
            fields["error.type"] = type(error).__qualname__
        logger.warning(
            "HTTP %(http.request.method)s %(url.full)s retrying in %(delay_seconds).1f s"
            " (attempt %(attempt)d/%(max_retries)d): %(reason)s",
            fields,
            exc_info=error,
            extra=fields,
        )

    def failed(self, error: BaseException) -> None:
        # Before the first request is reported nothing reached the wire, and there is no URL to name.
        if self.attempts == 0 or not self._is_enabled_for(logging.ERROR):
            return

        elapsed_seconds = time.perf_counter() - self.started_at
        fields: dict[str, object] = {
            "http.request.method": self.method,
            "url.full": self.url,
            "elapsed_seconds": elapsed_seconds,
            "error.type": type(error).__qualname__,
        }
        if self.attempts > 1:
            fields["http.request.resend_count"] = self.attempts - 1
        logger.error(
            "HTTP %(http.request.method)s %(url.full)s failed after %(elapsed_ms)d ms: %(error.type)s",
            {**fields, "elapsed_ms": round(elapsed_seconds * 1000)},
            exc_info=error,
            extra=fields,
        )

    def _is_enabled_for(self, level: int) -> bool:
        """Whether a record at ``level`` passes both level checks: the call's ``log_level`` override, if one
        was named, and the logger's own -- the standard library's ``isEnabledFor``, a cached dict read."""
        return (self.log_level_override is None or self.log_level_override <= level) and logger.isEnabledFor(level)


def _status_text(status_code: int) -> str:
    """The status as the retry line prints it: ``503 Service Unavailable``, or ``599`` when the phrase is unknown."""
    try:
        return f"{status_code} {HTTPStatus(status_code).phrase}"
    except ValueError:
        return str(status_code)


def _body_text(content: bytes, charset: str, limit: int) -> str:
    """``content`` as a body line prints it, decoded once: whole when it fits in ``limit`` bytes, otherwise its
    first ``limit`` bytes followed by `` ... (N bytes total)``, N being its own size.

    Only what is printed is decoded, so a large body costs a ``limit``-sized decode. The slice can end only
    inside the last character, and ``errors="ignore"`` drops exactly that partial character."""
    if len(content) <= limit:
        return content.decode(charset, errors="replace")
    head = content[:limit].decode(charset, errors="ignore")
    return f"{head} ... ({len(content)} bytes total)"


def _describe_file(content: AsyncBinaryContent, filename: str | None) -> str:
    """``<file "report.pdf", 1024 bytes>`` or ``<file, streamed>``, from facts the body holds; nothing is read.

    The media type is not here: it is the label of the line the description sits on, as the body's own is."""
    name = f' "{filename}"' if filename is not None else ""
    size = _buffered_size(content)
    extent = f"{size} bytes" if size is not None else "streamed"
    return f"<file{name}, {extent}>"


def _buffered_size(content: AsyncBinaryContent) -> int | None:
    """The size of a buffered source -- ``bytes`` or ``bytearray`` already in memory.

    ``None`` for anything the transport has yet to read: a path, a reader, an iterator."""
    return len(content) if isinstance(content, (bytes, bytearray)) else None


def _describe_parts(parts: Sequence[MultipartPart], options: LoggingOptions) -> str:
    """A multipart body's part count, then one line per part in the body line's own shape, ``name (media type): value``.

    RFC 7578 gives a part a name, an optional filename, an optional ``Content-Type`` and its content;
    the dump prints exactly those, laid out as the header dump lays out its lines."""
    heading = f"{len(parts)} parts" if len(parts) != 1 else "1 part"
    return heading + "".join(f"\n  {_part_label(part)}: {_part_text(part, options)}" for part in parts)


def _part_label(part: MultipartPart) -> str:
    """A part's name, with its media type in parentheses where it declares one -- a form field declares none."""
    return part.name if part.media_type is None else f"{part.name} ({part.media_type})"


def _part_text(part: MultipartPart, options: LoggingOptions) -> str:
    """One multipart part's value as the dump prints it: a form field ``mask_keys`` names hidden, as a form
    body's would be; any other text part's bytes decoded and cut on their own; a file part described."""
    match part:
        case MultipartText(name, _, None) if base_name(name) in options.mask_keys:
            return options.redaction_placeholder
        case MultipartText(_, content, _):
            return _body_text(content, "utf-8", options.body_size_limit)
        case MultipartFile(_, content, filename, _):
            return _describe_file(content, filename)
