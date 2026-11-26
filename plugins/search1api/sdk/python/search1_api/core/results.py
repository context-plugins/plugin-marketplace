"""The result of one API call, as a value rather than an exception.

``ApiResult`` is a tagged union: a call yields exactly one of :class:`Success` or :class:`Failure`,
never both and never neither, so which one you hold is a fact the type checker can see. Narrow it
with ``match`` or ``isinstance`` and the payload or error comes with it:

    match client.body_params.with_raw_response.send_model(employee):
        case Success(payload=confirmation):
            ...
        case Failure(error=err):
            ...

Both variants are frozen dataclasses, so pattern matching needs nothing added. To skip the branch,
call ``unwrap(result)``: it returns the payload or raises ``ApiError``. It is a function, not a method, so
the same name also covers paginators: ``unwrap(paginator, items_selector)`` returns a paginator of payloads.

Each carries the response's **head** -- its status and headers -- and the **call** -- its method and
URL, the path rendered and the query dropped, as every exception names it -- as fields of its own
rather than a response or a request object. There is no body beside them: the body *is* the payload
on a success, and on a failure it is the error, reachable through :class:`RawError` where the
operation documents no schema for it. A no-content operation therefore cannot show a caller the body
it discarded; reaching one deliberately is future work, and an empty ``content`` on a response object
was the wrong way to advertise its absence.

:class:`RawError` lives here too: it is the error type a :class:`Failure` carries when the operation
does not document the status that came back."""

from __future__ import annotations

from collections.abc import AsyncIterator, Callable, Iterator, Mapping, Sequence
from dataclasses import dataclass, field
from typing import Any, Generic, NoReturn, TypeAlias, TypeVar, overload

from ._internal.wire import parse_json
from .exceptions import ApiError
from .optionality import OptionalNullable, items_or_empty
from .paginator import AsyncPaginator, Paginator
from .transport import HttpMethod

T = TypeVar("T")
E = TypeVar("E")
ItemT = TypeVar("ItemT")


@dataclass(frozen=True, slots=True)
class Success(Generic[T]):
    """A successful (2xx) API call carrying the decoded ``payload``."""

    payload: T
    status_code: int
    headers: Mapping[str, str] = field(repr=False)
    """Header names lowercased, per the transports' obligation -- look keys up in lowercase.

    Kept out of the generated repr: a response's headers carry ``set-cookie``, so a result printed
    in a log line or a debugger pane would otherwise hand over a session secret. The status stays,
    because identifying the result is the whole job of the string form (ADR-0017)."""
    method: HttpMethod
    url: str
    """The call, as every exception names it: its path rendered, its query dropped -- the diagnostic
    record ADR-0050 foresaw, in place of the request itself."""


@dataclass(frozen=True, slots=True)
class Failure(Generic[E]):
    """A failed (non-2xx) API call carrying the decoded error body ``error``.

    ``error`` is the typed error payload directly (a union of the operation's
    documented schemas, or :class:`RawError` for an unmapped status) -- not a wrapper."""

    error: E
    status_code: int
    headers: Mapping[str, str] = field(repr=False)
    """Header names lowercased, per the transports' obligation -- look keys up in lowercase.

    Kept out of the generated repr: a response's headers carry ``set-cookie``, so a result printed
    in a log line or a debugger pane would otherwise hand over a session secret. The status stays,
    because identifying the result is the whole job of the string form (ADR-0017)."""
    method: HttpMethod
    url: str
    """The call, as every exception names it: its path rendered, its query dropped -- the diagnostic
    record ADR-0050 foresaw, in place of the request itself."""


# One call returns exactly one of these. Narrow with ``match`` or ``isinstance``,
# or get the payload with ``unwrap(result)``.
ApiResult: TypeAlias = Success[T] | Failure[E]


@dataclass(frozen=True, slots=True)
class RawError:
    """Undecoded fallback body (unmapped status / no declared schema).

    Holds the status and the bytes themselves rather than a response, so the one object that *is*
    the error carries everything it needs to describe itself. Decoded on demand --
    ``RawError(status_code, content)``."""

    status_code: int
    content: bytes

    def text(self, encoding: str = "utf-8") -> str:
        """Decode the undecoded body as text, for a log line or a diagnostic.

        Args:
            encoding: Character encoding to decode with.

        Returns:
            The body as text, undecodable bytes replaced rather than raising."""
        return self.content.decode(encoding, errors="replace")

    def json(self) -> Any:
        """Parse the undecoded body as JSON.

        Returns:
            Whatever the body parses to.

        Raises:
            ValueError: If the body is not valid JSON."""
        return parse_json(self.content)

    def __repr__(self) -> str:
        # Identify by status only -- the (undecoded, possibly large, binary, or sensitive) body is
        # deliberately kept out of the string form. Read it on demand via ``text``/``json``.
        return f"{type(self).__name__}(status_code={self.status_code})"


@overload
def unwrap(result: Failure[E], /) -> NoReturn: ...


@overload
def unwrap(result: ApiResult[T, E], /) -> T: ...


@overload
def unwrap(
    paginator: Paginator[ApiResult[T, E], ItemT], items_selector: Callable[[T], OptionalNullable[Sequence[ItemT]]], /
) -> Paginator[T, ItemT]: ...


@overload
def unwrap(
    paginator: AsyncPaginator[ApiResult[T, E], ItemT],
    items_selector: Callable[[T], OptionalNullable[Sequence[ItemT]]],
    /,
) -> AsyncPaginator[T, ItemT]: ...


def unwrap(
    value: ApiResult[T, E] | Paginator[ApiResult[T, E], ItemT] | AsyncPaginator[ApiResult[T, E], ItemT],
    items_selector: Callable[[T], OptionalNullable[Sequence[ItemT]]] | None = None,
    /,
) -> T | Paginator[T, ItemT] | AsyncPaginator[T, ItemT]:
    """Return the parsed form of a raw value: a result's payload, or a paginator over payloads.

    A ``Success`` returns its payload and a ``Failure`` raises. A paginator of ``ApiResult`` pages returns a
    paginator of the same flavour over the payloads: earlier pages arrive, and the first failed page raises.
    The raw paginator's own item selector is not used.

    Args:
        value: A result, or a paginator whose pages are results.
        items_selector: Returns one payload's items, in order, as the field is modelled: ``None`` or ``UNSET`` is a
            page with none. Required with a paginator; omit it with a result.

    Returns:
        The payload, or a lazy paginator over payloads that can be iterated more than once.

    Raises:
        ApiError: For a ``Failure``, carrying its ``error``, the response head and the call. For a paginator,
            raised while iterating, at the first failed page.
        TypeError: If the value is neither a result nor a paginator, or a paginator arrives without ``items_selector``.
            The overloads reject both statically."""
    match value, items_selector:
        case Success(payload=payload), _:
            return payload
        case Failure(error=error, status_code=status_code, headers=headers, method=method, url=url), _:
            raise ApiError(error=error, status_code=status_code, headers=headers, method=method, url=url)
        case Paginator(), items if items is not None:

            def fetch_pages() -> Iterator[T]:
                for result in value.iter_pages():
                    yield unwrap(result)

            return Paginator(
                fetch_pages, lambda page: items_or_empty(items_selector(page)) if items_selector is not None else ()
            )
        case AsyncPaginator(), items if items is not None:

            async def async_fetch_pages() -> AsyncIterator[T]:
                async for result in value.iter_pages():
                    yield unwrap(result)

            return AsyncPaginator(
                async_fetch_pages,
                lambda page: items_or_empty(items_selector(page)) if items_selector is not None else (),
            )
        case _:
            raise TypeError("the value cannot be unwrapped")
