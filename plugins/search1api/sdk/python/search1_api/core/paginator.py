"""The paginator a paginated endpoint returns: a lazy view over a walk of pages that can be iterated again.

A paginator holds a function that starts a new page iterator, never an iterator itself. So building one sends
nothing, the first request goes out when iteration starts, and each new iteration starts again from the
first page. Iterating yields items; ``iter_pages()`` yields pages.

``results`` imports this module, so this module must not import ``results``."""

from __future__ import annotations

from collections.abc import AsyncIterator, Callable, Iterator, Sequence
from dataclasses import dataclass
from typing import Generic, TypeVar

PageT = TypeVar("PageT")
ItemT = TypeVar("ItemT")


@dataclass(frozen=True, slots=True)
class Paginator(Generic[PageT, ItemT]):
    """A walk over a paginated operation. Iterate it for items, or call ``iter_pages()`` for pages.

    Nothing is sent until iteration starts. Each iteration starts again from the first page, and a ``break``
    stops it with no further request."""

    _fetch_pages: Callable[[], Iterator[PageT]]
    _items_selector: Callable[[PageT], Sequence[ItemT]]

    def __iter__(self) -> Iterator[ItemT]:
        for page in self._fetch_pages():
            yield from self._items_selector(page)

    def iter_pages(self) -> Iterator[PageT]:
        """Start a new walk and yield each page as it arrives."""
        return self._fetch_pages()


@dataclass(frozen=True, slots=True)
class AsyncPaginator(Generic[PageT, ItemT]):
    """An async walk over a paginated operation. Use ``async for`` for items, or ``iter_pages()`` for pages.

    Nothing is sent until iteration starts. Each iteration starts again from the first page, and a ``break``
    stops it with no further request."""

    _fetch_pages: Callable[[], AsyncIterator[PageT]]
    _items_selector: Callable[[PageT], Sequence[ItemT]]

    async def __aiter__(self) -> AsyncIterator[ItemT]:
        async for page in self._fetch_pages():
            for item in self._items_selector(page):
                yield item

    def iter_pages(self) -> AsyncIterator[PageT]:
        """Start a new walk and yield each page as it arrives."""
        return self._fetch_pages()
