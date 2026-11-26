"""The one place a ``TypeAdapter`` is built, and what a value is validated *into*.

Shared by the request path (:func:`json_body`, :func:`param`) and the response path (the decoders),
so the expensive step in pydantic v2 -- building the adapter -- happens once per type for the life
of the process rather than once per request.

It sits on its own, below both paths, because both need it and neither owns it: a request-body
module reaching into the response-decoding module for it would put a cycle in the import graph."""

from __future__ import annotations

from functools import reduce
from operator import or_
from threading import RLock
from types import UnionType
from typing import Any, Final, TypeVar, Union, get_args, get_origin

from pydantic import TypeAdapter
from typing_extensions import TypeForm, is_typeddict

T = TypeVar("T")

_CONTAINERS: Final = (list, dict)
"""The container origins a spec can express -- an array and a map -- so the only two emitted."""

_ADAPTER_CACHE_MAX: Final = 512
_adapter_lock: Final = RLock()
_adapters: Final[dict[object, TypeAdapter[Any]]] = {}


def validation_target(type_: TypeForm[T]) -> TypeForm[T]:
    """Drop the dict-shaped companions from ``type_``, leaving what a value is validated *into*.

    An endpoint accepts ``Employee | EmployeeDict``, and that whole union is what it declares and
    hands the factory -- but only ``Employee`` may reach :func:`adapter_for`. The adapter both
    validates *and* dumps, and a dict matching the ``TypedDict`` arm is dumped verbatim: wire
    aliases lost (``address_line_1`` for ``addressLine1``), defaulted fields absent, unknown keys
    silently dropped. A companion is an *input* shape, never a wire shape, so the type describing
    what a caller may pass and the type a value is validated into are two different things.

    The strip reaches wherever a companion can be written -- through union members and into
    container parameters -- so ``list[Employee | EmployeeDict]`` and
    ``list[Employee] | list[EmployeeDict]`` both resolve to ``list[Employee]``. Generic over ``T``
    so that ``adapter_for(validation_target(type_))`` keeps the adapter's type instead of erasing
    it to ``Any`` at the one hop between two otherwise precise signatures.

    A type form that is dict-shaped *throughout* has no target at all. Only a generator defect
    emits one, and it type-checks, so it is named here rather than surfacing as ``reduce`` failing
    on an empty sequence at the first request.

    Args:
        type_: The declared type expression, dict-shaped companions included.

    Returns:
        The same expression with every companion arm removed -- what a value validates into.

    Raises:
        TypeError: If ``type_`` is dict-shaped throughout, leaving no model arm to validate into."""
    if _is_companion(type_):
        raise TypeError(
            f"{type_!r} names only dict-shaped companions, which are input shapes and never wire "
            f"shapes -- a validation target needs the model arm each companion accompanies"
        )

    target: TypeForm[T] = _strip_companions(type_)
    return target


def _is_companion(type_: TypeForm[Any]) -> bool:
    """Whether ``type_`` is dict-shaped throughout, so no model arm survives the strip.

    ``all`` for a union and ``any`` for a container, and the asymmetry is the rule itself: a union
    keeps a target while *one* member has one, whereas a container whose parameter has none has none
    either -- ``list[EmployeeDict]`` cannot be narrowed to a list of anything.

    Args:
        type_: The type expression to classify.

    Returns:
        ``True`` when nothing in ``type_`` would survive the companion strip."""
    if is_typeddict(type_):
        return True

    origin = get_origin(type_)
    if origin in (Union, UnionType):
        return all(_is_companion(arg) for arg in get_args(type_))
    if origin in _CONTAINERS:
        return any(_is_companion(arg) for arg in get_args(type_))
    return False


def _strip_companions(type_: TypeForm[Any]) -> TypeForm[Any]:
    """``type_`` with every companion dropped, rebuilt only where something actually changed.

    Two properties, each load-bearing:

    - the origin checks, because ``get_args(list[str])`` is ``(str,)`` -- descending is only sound
      for the origins whose parameters *are* element types, so everything else is returned
      untouched. Notably ``Annotated``, which is how a discriminated union carries its
      ``WireDiscriminator``: descending would silently untag it.
      ``_CONTAINERS`` is closed at ``list`` and ``dict`` rather than "every container Python has" --
      a spec expresses arrays and maps, and descending a shape no generator emits would be
      speculative surface. A ``tuple`` or ``set`` parameter passes through like any other origin;
    - the nothing-changed short-circuits, which hand back the expression *as written* rather than a
      rebuilt one, so a companion-free union such as ``EmailStr | str`` cannot lose a member to
      ``Union``'s deduplication, and one declared type keeps one :func:`adapter_for` cache entry.

    Rebuilt with ``|`` rather than ``Union[tuple(targets)]``: mypy types that subscript as a typing
    special form rather than a ``TypeForm``, so it cannot be returned from this signature. The
    annotated locals are what keep the imprecision of ``get_args`` here instead of at every caller.

    Args:
        type_: The type expression to strip.

    Returns:
        ``type_`` itself when no companion was found, otherwise the rebuilt expression."""
    origin = get_origin(type_)
    args = get_args(type_)

    if origin in (Union, UnionType):
        targets = [_strip_companions(arg) for arg in args if not _is_companion(arg)]
        if len(targets) == len(args) and all(target is arg for target, arg in zip(targets, args, strict=True)):
            return type_
        rebuilt: TypeForm[Any] = reduce(or_, targets)
        return rebuilt

    if origin in _CONTAINERS:
        stripped = [_strip_companions(arg) for arg in args]
        if all(target is arg for target, arg in zip(stripped, args, strict=True)):
            return type_
        reparametrized: TypeForm[Any] = origin[tuple(stripped)]
        return reparametrized

    return type_


def adapter_for(type_: TypeForm[T]) -> TypeAdapter[T]:
    """Return the process-wide cached ``TypeAdapter`` for ``type_``, building it once.

    The cache must be module-level to work at all: a decoder is constructed per call, so
    an instance-owned cache would be discarded with it and never see a second lookup.

    Unhashable type forms bypass the cache. At ``_ADAPTER_CACHE_MAX`` entries it is cleared
    wholesale -- predictable, and far beyond the number of distinct types one generated SDK
    produces.

    A hit is served without the lock, which is sound because a dict read is atomic under the GIL and
    internally locked on free-threaded builds; a stale read racing the wholesale ``clear()`` still
    returns a correct adapter for that type. The lock is there to make each *build* happen once --
    the contract ``test_adapter_cache.py`` pins -- not to serialize reads, so the build stays inside
    it and the re-check inside catches a type another thread built while this one waited.

    Args:
        type_: The validation target, already stripped of companions by :func:`validation_target`.

    Returns:
        The adapter for ``type_``, shared across the process unless ``type_`` is unhashable."""
    try:
        hash(type_)
    except TypeError:
        return TypeAdapter(type_)

    cached = _adapters.get(type_)
    if cached is not None:
        return cached

    with _adapter_lock:
        cached = _adapters.get(type_)
        if cached is not None:
            return cached

        if len(_adapters) >= _ADAPTER_CACHE_MAX:
            _adapters.clear()

        adapter: TypeAdapter[T] = TypeAdapter(type_)
        _adapters[type_] = adapter
        return adapter
