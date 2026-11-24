"""Pagination: the five paging states, their factories, and the sync and async loops that walk them.

A state holds the value that moves from page to page (an offset, a page number, a cursor, a key, or the next
page's URL and query) and the selectors the endpoint uses to read the next move off a response. After each
successful page the loop calls ``advance`` with the page, its headers and the number of items the page
returned, read through ``items_selector``; ``advance`` returns the next state, or ``None`` to stop.

States are frozen. ``advance`` returns a copy made with ``dataclasses.replace`` that changes only the moving
value, so the selectors stay with the walk. A state never advances to the value it just sent, so a server
that keeps returning the same page ends the walk instead of looping forever. A selector over an
``OptionalNullable`` field may return ``UNSET``; every stop rule treats that as no answer. ``items_selector``
follows the same rule: it returns the items field as modelled, and ``None`` or ``UNSET`` -- a nullable or
omitted array -- is a page with no items, read through ``optionality.items_or_empty``.

An endpoint never names a state class. It calls a factory with the page model as a subscript, such as
``offset_state[Products](…)``. The subscript types the selectors, so a mistake inside one fails the build.
The factory returns the class itself, because Python 3.10 cannot construct a frozen, slotted dataclass
through a ``typing`` subscript. Calling a factory without its subscript fails the build.

``paginate`` and ``async_paginate`` run the loop: fetch the page for the current state, yield the result,
stop after a ``Failure``, then ask ``advance`` for the next state. The result is yielded before it is
checked, so a ``Failure`` is the last page the caller sees rather than one that is dropped. Neither raw view
raises for an API error: ``iter_pages()`` carries the ``Failure`` and the item view yields nothing for it; only
the parsed mode, ``results.unwrap``, raises ``ApiError`` there. Each page is a
full ``execute``, so auth, retries, the idempotency key and ``request_options`` apply to every page.
Building a paginator sends nothing; the first request goes out when iteration starts, which is why neither
function is a coroutine.

Each function has one ``@overload`` per state class. The overload keeps the state's own class inside the
endpoint's ``fetch_page`` lambda, so ``state.offset`` resolves, and ties the state's page type to the
decoder's, so a mismatch fails the build. The implementation takes the union of all five states and mypy
checks it against every overload. A new strategy needs a new state, factory, pair of overloads and
``PagingState`` arm, and nothing else.

``results.unwrap`` turns a paginator of results into a paginator of payloads; that is the parsed mode."""

from __future__ import annotations

from collections.abc import AsyncIterator, Awaitable, Callable, Iterator, Mapping, Sequence
from dataclasses import dataclass, replace
from typing import Any, Final, Generic, TypeAlias, TypeVar, overload
from urllib.parse import parse_qsl, urljoin, urlsplit

from typing_extensions import TypeForm

from ._internal.subscripts import SubscriptOnly
from ._internal.urls import build_url
from .optionality import OptionalNullable, UnsetType, items_or_empty
from .paginator import AsyncPaginator, Paginator
from .params import Param, SerializationFormat, UrlTemplate, param
from .results import ApiResult, Success

PayloadT = TypeVar("PayloadT")
E = TypeVar("E")
ItemT = TypeVar("ItemT")


@dataclass(frozen=True, kw_only=True, slots=True)
class OffsetState(Generic[PayloadT]):
    """Moves by the number of items each page returned.

    The next offset is the current offset (``None`` counts as ``0``) plus ``item_count``, the number of items
    the loop read off the page through ``items_selector``. The walk stops, in this order: when the next offset
    reaches ``total_items``; when the page was empty; when ``has_more`` returns ``False``; or when there is no
    total and the page has fewer items than ``limit``. If ``has_more`` returns ``True``, the walk continues and
    the last rule is skipped."""

    offset: int | None
    limit: int | None
    has_more: Callable[[PayloadT, Mapping[str, str]], OptionalNullable[bool]] | None = None
    total_items: Callable[[PayloadT, Mapping[str, str]], OptionalNullable[int]] | None = None

    def advance(
        self, *, payload: PayloadT, headers: Mapping[str, str], item_count: int
    ) -> OffsetState[PayloadT] | None:
        """Return the next state, or ``None`` when a stop rule applies."""
        current_offset = self.offset if self.offset is not None else 0
        next_offset = current_offset + item_count
        total_items = self.total_items(payload, headers) if self.total_items is not None else None
        if isinstance(total_items, int) and next_offset >= total_items:
            return None
        if next_offset == current_offset:
            return None
        has_more = self.has_more(payload, headers) if self.has_more is not None else None
        if isinstance(has_more, bool):
            return replace(self, offset=next_offset) if has_more else None
        if not isinstance(total_items, int) and self.limit is not None and item_count < self.limit:
            return None
        return replace(self, offset=next_offset)


@dataclass(frozen=True, kw_only=True, slots=True)
class PageState(Generic[PayloadT]):
    """Moves by a 1-based page number.

    The next page is the current page (``None`` counts as ``1``) plus one. The walk stops, in this order: when
    the current page has reached ``total_pages``; when ``has_more`` returns ``False``; when the page was empty;
    or when there is no total and the page has fewer items than ``limit``. If ``has_more`` returns ``True``,
    the walk continues and the last two rules are skipped. The page's size is ``item_count``, which the loop
    reads through ``items_selector``."""

    page: int | None
    limit: int | None
    has_more: Callable[[PayloadT, Mapping[str, str]], OptionalNullable[bool]] | None = None
    total_pages: Callable[[PayloadT, Mapping[str, str]], OptionalNullable[int]] | None = None

    def advance(self, *, payload: PayloadT, headers: Mapping[str, str], item_count: int) -> PageState[PayloadT] | None:
        """Return the next state, or ``None`` when a stop rule applies."""
        total_pages = self.total_pages(payload, headers) if self.total_pages is not None else None
        current_page = self.page if self.page is not None else 1
        if isinstance(total_pages, int) and current_page >= total_pages:
            return None
        has_more = self.has_more(payload, headers) if self.has_more is not None else None
        if isinstance(has_more, bool):
            return replace(self, page=current_page + 1) if has_more else None
        if item_count == 0:
            return None
        if not isinstance(total_pages, int) and self.limit is not None and item_count < self.limit:
            return None
        return replace(self, page=current_page + 1)


@dataclass(frozen=True, kw_only=True, slots=True)
class CursorState(Generic[PayloadT]):
    """Moves by the cursor each page returns.

    The walk stops when the next cursor is missing, empty or ``UNSET``, when it equals the cursor just sent,
    or when ``has_more`` returns ``False``. There is no ``count < limit`` rule on purpose: a short page that
    still has a cursor does not mean the collection has ended. ``item_count`` is accepted so every state answers
    the same call, and is not read: a cursor, not a count, decides the next page."""

    cursor: str | None
    next_cursor: Callable[[PayloadT, Mapping[str, str]], OptionalNullable[str]]
    has_more: Callable[[PayloadT, Mapping[str, str]], OptionalNullable[bool]] | None = None

    def advance(
        self, *, payload: PayloadT, headers: Mapping[str, str], item_count: int
    ) -> CursorState[PayloadT] | None:
        """Return the next state, or ``None`` when a stop rule applies."""
        next_cursor = self.next_cursor(payload, headers)
        if not next_cursor:
            return None
        if next_cursor == self.cursor:
            return None
        if self.has_more is not None and self.has_more(payload, headers) is False:
            return None
        return replace(self, cursor=next_cursor)


@dataclass(frozen=True, kw_only=True, slots=True)
class KeysetState(Generic[PayloadT]):
    """Moves by a key read from the page just received, usually the last item's id.

    The walk stops, in this order: when the page was empty; when ``has_more`` returns ``False``; when
    ``has_more`` gives no answer and the page has fewer items than ``limit``; or when the next key is ``None``,
    ``UNSET`` or equal to the key just sent. ``""`` is a valid key, not a missing one. The page's size is
    ``item_count``, which the loop reads through ``items_selector``."""

    key: str | None
    limit: int | None
    next_key: Callable[[PayloadT, Mapping[str, str]], OptionalNullable[str]]
    has_more: Callable[[PayloadT, Mapping[str, str]], OptionalNullable[bool]] | None = None

    def advance(
        self, *, payload: PayloadT, headers: Mapping[str, str], item_count: int
    ) -> KeysetState[PayloadT] | None:
        """Return the next state, or ``None`` when a stop rule applies."""
        if item_count == 0:
            return None
        has_more = self.has_more(payload, headers) if self.has_more is not None else None
        if has_more is False:
            return None
        if not isinstance(has_more, bool) and self.limit is not None and item_count < self.limit:
            return None
        next_key = self.next_key(payload, headers)
        if next_key is None or isinstance(next_key, UnsetType) or next_key == self.key:
            return None
        return replace(self, key=next_key)


@dataclass(frozen=True, kw_only=True, slots=True)
class LinkState(Generic[PayloadT]):
    """Moves by following the next-page link a response gives, in its body or its ``Link`` header.

    ``path_params`` fill the placeholders of the first ``url_template``. Following a link replaces
    ``url_template`` (with the link's path), ``path_params`` (with none, since that path is literal) and
    ``query_params`` (with its query). The link is resolved against the URL this state renders and must keep
    its scheme, host and port; a link to another origin raises instead of being followed. The walk stops when
    the next link is missing, empty or ``UNSET``, or when it renders to the same URL as this state.
    ``item_count`` is accepted so every state answers the same call, and is not read: a link, not a count,
    decides the next page."""

    url_template: UrlTemplate
    path_params: Sequence[Param[Any]] = ()
    query_params: Sequence[Param[Any]]
    next_link: Callable[[PayloadT, Mapping[str, str]], OptionalNullable[str]]

    def advance(self, *, payload: PayloadT, headers: Mapping[str, str], item_count: int) -> LinkState[PayloadT] | None:
        """Return the state for the page's next link, or ``None`` when the walk stops.

        Raises:
            ValueError: If the link points to another origin, or its port is not a number."""
        next_link = self.next_link(payload, headers)
        if not next_link:
            return None
        current_url = build_url(self.url_template, path_params=self.path_params, query_params=self.query_params)
        next_template, link_params = _resolve_next_link(current_url, next_link)
        if build_url(next_template, query_params=link_params) == current_url:
            return None
        return replace(self, url_template=next_template, path_params=(), query_params=link_params)


def _resolve_next_link(current_url: str, next_link: str) -> tuple[UrlTemplate, tuple[Param[Any], ...]]:
    """Resolve ``next_link`` against ``current_url`` and split it into a URL template and query parameters.

    Scheme, host and port are compared as written; default ports are not filled in. Each query key becomes one
    ``Param[list[str]]`` rendered ``PLAIN``, so a repeated key keeps one pair per value, in the link's order.
    Blank values are kept. A link with no path gets ``/``.

    Raises:
        ValueError: If the resolved link's scheme, host or port differs from ``current_url``'s."""
    current = urlsplit(current_url)
    resolved = urlsplit(urljoin(current_url, next_link))
    if resolved.scheme != current.scheme or resolved.hostname != current.hostname or resolved.port != current.port:
        raise ValueError(
            f"Cross-origin pagination link '{resolved.scheme}://{resolved.netloc}' does not match the origin of the "
            f"URL just fetched, '{current.scheme}://{current.netloc}'."
        )
    grouped: dict[str, list[str]] = {}
    for key, value in parse_qsl(resolved.query, keep_blank_values=True):
        grouped.setdefault(key, []).append(value)
    link_params = tuple(
        param[list[str]](key, values, serialization_format=SerializationFormat.PLAIN) for key, values in grouped.items()
    )
    return UrlTemplate(base_url=f"{resolved.scheme}://{resolved.netloc}", path=resolved.path or "/"), link_params


class _OffsetStateFactory(SubscriptOnly):
    """``offset_state[PayloadT](…)`` builds a :class:`OffsetState` whose selectors read ``PayloadT``."""

    __slots__ = ()
    factory_name = "offset_state"
    spelling = "offset_state[PayloadT](…), e.g. offset_state[Products](offset=offset, limit=limit, has_more=…)"

    def __getitem__(self, declared: TypeForm[PayloadT]) -> type[OffsetState[PayloadT]]:
        return OffsetState


class _PageStateFactory(SubscriptOnly):
    """``page_state[PayloadT](…)`` builds a :class:`PageState` whose selectors read ``PayloadT``."""

    __slots__ = ()
    factory_name = "page_state"
    spelling = "page_state[PayloadT](…), e.g. page_state[Products](page=page, limit=limit, has_more=…)"

    def __getitem__(self, declared: TypeForm[PayloadT]) -> type[PageState[PayloadT]]:
        return PageState


class _CursorStateFactory(SubscriptOnly):
    """``cursor_state[PayloadT](…)`` builds a :class:`CursorState` whose selectors read ``PayloadT``."""

    __slots__ = ()
    factory_name = "cursor_state"
    spelling = "cursor_state[PayloadT](…), e.g. cursor_state[Orders](cursor=cursor, next_cursor=…)"

    def __getitem__(self, declared: TypeForm[PayloadT]) -> type[CursorState[PayloadT]]:
        return CursorState


class _KeysetStateFactory(SubscriptOnly):
    """``keyset_state[PayloadT](…)`` builds a :class:`KeysetState` whose selectors read ``PayloadT``."""

    __slots__ = ()
    factory_name = "keyset_state"
    spelling = "keyset_state[PayloadT](…), e.g. keyset_state[CardTransactions](key=since, …)"

    def __getitem__(self, declared: TypeForm[PayloadT]) -> type[KeysetState[PayloadT]]:
        return KeysetState


class _LinkStateFactory(SubscriptOnly):
    """``link_state[PayloadT](…)`` builds a :class:`LinkState` whose selectors read ``PayloadT``."""

    __slots__ = ()
    factory_name = "link_state"
    spelling = "link_state[PayloadT](…), e.g. link_state[Orders](url_template=…, query_params=…, next_link=…)"

    def __getitem__(self, declared: TypeForm[PayloadT]) -> type[LinkState[PayloadT]]:
        return LinkState


offset_state: Final = _OffsetStateFactory()
page_state: Final = _PageStateFactory()
cursor_state: Final = _CursorStateFactory()
keyset_state: Final = _KeysetStateFactory()
link_state: Final = _LinkStateFactory()

PagingState: TypeAlias = (
    OffsetState[PayloadT] | PageState[PayloadT] | CursorState[PayloadT] | KeysetState[PayloadT] | LinkState[PayloadT]
)


@overload
def paginate(
    *,
    initial_state: OffsetState[PayloadT],
    fetch_page: Callable[[OffsetState[PayloadT]], ApiResult[PayloadT, E]],
    items_selector: Callable[[PayloadT], OptionalNullable[Sequence[ItemT]]],
) -> Paginator[ApiResult[PayloadT, E], ItemT]: ...


@overload
def paginate(
    *,
    initial_state: PageState[PayloadT],
    fetch_page: Callable[[PageState[PayloadT]], ApiResult[PayloadT, E]],
    items_selector: Callable[[PayloadT], OptionalNullable[Sequence[ItemT]]],
) -> Paginator[ApiResult[PayloadT, E], ItemT]: ...


@overload
def paginate(
    *,
    initial_state: CursorState[PayloadT],
    fetch_page: Callable[[CursorState[PayloadT]], ApiResult[PayloadT, E]],
    items_selector: Callable[[PayloadT], OptionalNullable[Sequence[ItemT]]],
) -> Paginator[ApiResult[PayloadT, E], ItemT]: ...


@overload
def paginate(
    *,
    initial_state: KeysetState[PayloadT],
    fetch_page: Callable[[KeysetState[PayloadT]], ApiResult[PayloadT, E]],
    items_selector: Callable[[PayloadT], OptionalNullable[Sequence[ItemT]]],
) -> Paginator[ApiResult[PayloadT, E], ItemT]: ...


@overload
def paginate(
    *,
    initial_state: LinkState[PayloadT],
    fetch_page: Callable[[LinkState[PayloadT]], ApiResult[PayloadT, E]],
    items_selector: Callable[[PayloadT], OptionalNullable[Sequence[ItemT]]],
) -> Paginator[ApiResult[PayloadT, E], ItemT]: ...


def paginate(
    *,
    initial_state: PagingState[PayloadT],
    fetch_page: Callable[[Any], ApiResult[PayloadT, E]],
    items_selector: Callable[[PayloadT], OptionalNullable[Sequence[ItemT]]],
) -> Paginator[ApiResult[PayloadT, E], ItemT]:
    """Walk a paginated operation on the sync client, one ``execute`` per page.

    Args:
        initial_state: The first page's state, built with a state factory such as
            ``offset_state[Products](…)``.
        fetch_page: Sends the request for the state it is given and returns that page's ``ApiResult``.
        items_selector: Returns one payload's items, in order, as the field is modelled: ``None`` or ``UNSET`` is a
            page with none. Applied to successful pages only: a ``Failure`` page yields no items.

    Returns:
        A lazy paginator that can be iterated more than once. Iterating it yields the items of each successful
        page and ends at a ``Failure`` without raising; ``iter_pages()`` yields each ``ApiResult``, the ``Failure``
        last, and never raises. Only the parsed mode, ``unwrap``, raises ``ApiError`` at a failed page."""

    def fetch_pages() -> Iterator[ApiResult[PayloadT, E]]:
        state = initial_state
        while True:
            result = fetch_page(state)
            yield result
            if not isinstance(result, Success):
                return
            next_state = state.advance(
                payload=result.payload,
                headers=result.headers,
                item_count=len(items_or_empty(items_selector(result.payload))),
            )
            if next_state is None:
                return
            state = next_state

    return Paginator(
        fetch_pages,
        lambda result: items_or_empty(items_selector(result.payload)) if isinstance(result, Success) else (),
    )


@overload
def async_paginate(
    *,
    initial_state: OffsetState[PayloadT],
    fetch_page: Callable[[OffsetState[PayloadT]], Awaitable[ApiResult[PayloadT, E]]],
    items_selector: Callable[[PayloadT], OptionalNullable[Sequence[ItemT]]],
) -> AsyncPaginator[ApiResult[PayloadT, E], ItemT]: ...


@overload
def async_paginate(
    *,
    initial_state: PageState[PayloadT],
    fetch_page: Callable[[PageState[PayloadT]], Awaitable[ApiResult[PayloadT, E]]],
    items_selector: Callable[[PayloadT], OptionalNullable[Sequence[ItemT]]],
) -> AsyncPaginator[ApiResult[PayloadT, E], ItemT]: ...


@overload
def async_paginate(
    *,
    initial_state: CursorState[PayloadT],
    fetch_page: Callable[[CursorState[PayloadT]], Awaitable[ApiResult[PayloadT, E]]],
    items_selector: Callable[[PayloadT], OptionalNullable[Sequence[ItemT]]],
) -> AsyncPaginator[ApiResult[PayloadT, E], ItemT]: ...


@overload
def async_paginate(
    *,
    initial_state: KeysetState[PayloadT],
    fetch_page: Callable[[KeysetState[PayloadT]], Awaitable[ApiResult[PayloadT, E]]],
    items_selector: Callable[[PayloadT], OptionalNullable[Sequence[ItemT]]],
) -> AsyncPaginator[ApiResult[PayloadT, E], ItemT]: ...


@overload
def async_paginate(
    *,
    initial_state: LinkState[PayloadT],
    fetch_page: Callable[[LinkState[PayloadT]], Awaitable[ApiResult[PayloadT, E]]],
    items_selector: Callable[[PayloadT], OptionalNullable[Sequence[ItemT]]],
) -> AsyncPaginator[ApiResult[PayloadT, E], ItemT]: ...


def async_paginate(
    *,
    initial_state: PagingState[PayloadT],
    fetch_page: Callable[[Any], Awaitable[ApiResult[PayloadT, E]]],
    items_selector: Callable[[PayloadT], OptionalNullable[Sequence[ItemT]]],
) -> AsyncPaginator[ApiResult[PayloadT, E], ItemT]:
    """Walk a paginated operation on the async client, one awaited ``execute`` per page.

    Works like :func:`paginate`, except that ``fetch_page`` returns an awaitable.

    Args:
        initial_state: The first page's state, built with a state factory such as
            ``offset_state[Products](…)``.
        fetch_page: Sends the request for the state it is given and returns an awaitable of that page's
            ``ApiResult``.
        items_selector: Returns one payload's items, in order, as the field is modelled: ``None`` or ``UNSET`` is a
            page with none. Applied to successful pages only: a ``Failure`` page yields no items.

    Returns:
        A lazy async paginator that can be iterated more than once, with the same item and page views as the
        sync one."""

    async def fetch_pages() -> AsyncIterator[ApiResult[PayloadT, E]]:
        state = initial_state
        while True:
            result = await fetch_page(state)
            yield result
            if not isinstance(result, Success):
                return
            next_state = state.advance(
                payload=result.payload,
                headers=result.headers,
                item_count=len(items_or_empty(items_selector(result.payload))),
            )
            if next_state is None:
                return
            state = next_state

    return AsyncPaginator(
        fetch_pages,
        lambda result: items_or_empty(items_selector(result.payload)) if isinstance(result, Success) else (),
    )
