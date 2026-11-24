"""Request parameters and the unresolved URL they are attached to.

A :class:`Param` is one query, header, path or form parameter: a key, the value the endpoint
received, and the adapter for the type it was declared as. The declared type decides how the value
reaches the wire -- a temporal alias carries its own serializer, so ``RFC1123DateTime`` and
``UnixSecondsDateTime`` render the same ``datetime`` as a string and as an int -- and is what
dict-shaped input is validated against. How a *collection* explodes into keys is the one choice a
type cannot express, so it stays a field (:class:`SerializationFormat`)."""

from __future__ import annotations

from collections.abc import Sequence
from dataclasses import dataclass
from enum import Enum
from typing import Any, Final, Generic, TypeVar

from pydantic import TypeAdapter
from typing_extensions import TypeForm

from ._internal.subscripts import SubscriptOnly
from .adapters import adapter_for, validation_target

T = TypeVar("T")


class SerializationFormat(Enum):
    """How a multi-valued *query or form* parameter explodes into keys.

    Only those two destinations can honour it, because only they can repeat or subscript a key. A
    path array folds into one comma-separated segment and a header array into one comma-separated
    field value -- OpenAPI's default ``style: simple`` for both, and RFC 9110's own rule for a
    repeated header -- so a path or header :class:`Param` carries this field and nothing reads it.
    That is the price of one ``Param`` and one :func:`param` factory serving every location a
    parameter can occupy, and it is a price rather than a defect: the alternative is a parameter
    type per destination, and with it a generator branch deciding which to emit -- the conditional
    emission ADR-0012 removed.

    The remaining path and header styles -- ``label``, ``matrix``, ``explode: true`` -- are not
    modelled, and cannot be from here: nothing below this module carries ``style`` or ``explode``,
    so the default is the whole of what there is to render."""

    INDEXED = "indexed"
    """Example: variableName[0]=value1"""

    UNINDEXED = "unindexed"
    """Example: variableName[]=value1"""

    PLAIN = "plain"
    """Example: variableName=value1&variableName=value2"""

    CSV = "csv"
    """Example: variableName=value1,value2"""

    TSV = "tsv"
    r"""Example: variableName=value1\tvalue2"""

    PSV = "psv"
    """Example: variableName=value1|value2"""


@dataclass(frozen=True, slots=True)
class Param(Generic[T]):
    """One request parameter, not yet flattened onto the wire.

    ``T`` is the endpoint's declared type in full, dict-shaped companion included -- exactly what
    ``param[...]`` accepts -- while the adapter targets :func:`validation_target` of it, which is
    what the value is validated *into*. ``value`` is typed ``object`` all the same, deliberately:
    every consumer holds a ``Param[Any]``, where a ``T``-typed field would read as ``Any`` and be
    checked as nothing, so ``object`` leaves the adapter as the only route to the value. The
    *resolved* adapter is held rather than the type expression it came from, so the one cache
    lookup happens when the parameter is built rather than on every flatten.

    Unlike a request body, a parameter is deliberately *not* serialized when it is built: query,
    header and path parameters are merged per key with the API-wide ``global_*`` sets while the
    request is being built, so they have to stay inspectable until then. ``wire_value``
    (``_internal/wire.py``) performs the same validate-then-dump through this ``adapter`` at that
    point, for every destination; each destination then decides only how the result is arranged --
    into query pairs, path segments, or one header value.

    Construct it through ``param[...]``, whose subscript is where ``T`` is bound.

    Two parameters compare equal when key, value and format match *and* they share an adapter.
    Adapters are cached per type by :func:`adapter_for`, so that holds for any cacheable type; an
    unhashable type form bypasses the cache and would make two otherwise-identical parameters
    unequal. Nothing depends on it -- resolution keys on ``key`` alone."""

    key: str
    value: object
    adapter: TypeAdapter[T]
    serialization_format: SerializationFormat = SerializationFormat.INDEXED


@dataclass(frozen=True, slots=True)
class _DeclaredParam(Generic[T]):
    """A parameter's declared type, bound to its adapter; call it with the key and value.

    Built by ``param[T]``; resolving the adapter there is what lets the parameter hold a typed
    ``TypeAdapter[T]``."""

    adapter: TypeAdapter[T]

    def __call__(
        self,
        key: str,
        value: T,
        *,
        serialization_format: SerializationFormat = SerializationFormat.INDEXED,
    ) -> Param[T]:
        return Param(key, value, self.adapter, serialization_format)


class _ParamFactory(SubscriptOnly):
    """``param[T](key, value)`` -- name a parameter's declared type in the subscript.

    Subscripted for the reason ``json_body`` documents in full: ``T`` is solved from the
    subscript alone, before the value is compared against it, so ``param[bool]("array",
    employee)`` is a build failure where a one-call ``param("array", employee, bool)`` would
    have inference absorb the disagreement. And because the factory declares no ``__call__``,
    *omitting* the declared type is a build failure too: ``param("array", True)`` is rejected
    statically (``[operator]``); the runtime ``__call__`` inherited from :class:`SubscriptOnly` is
    invisible to type checkers and exists only to turn that same mistake into a guided ``TypeError``.

    The subscript is a ``TypeForm``, exactly as in ``json_body[...]``, so a runtime union alias
    (``Person``, which is ``Employee | Boss``) binds ``T`` as precisely as a concrete class
    does. It is the endpoint's declared type in full, companion included --
    ``param[Person | PersonDict]`` -- and :func:`validation_target` keeps the companion out of
    the adapter."""

    factory_name = "param"
    spelling = 'param[T](key, value), e.g. param[bool]("array", True)'

    def __getitem__(self, declared: TypeForm[T]) -> _DeclaredParam[T]:
        return _DeclaredParam(adapter_for(validation_target(declared)))


param: Final = _ParamFactory()


@dataclass(frozen=True, slots=True)
class UrlTemplate:
    """An unresolved endpoint URL.

    Holds a (possibly templated) base URL, the endpoint-relative path, and the
    server variables that fill the base URL's ``{placeholder}`` tokens. The base
    URL and the path are expanded separately when the request is built.

    A server variable is *configuration* rather than a spec-declared parameter --
    it is resolved from ``ServerConfig`` before any request exists -- but it fills
    a placeholder exactly as a path parameter does, so it is carried as a
    :class:`Param` and rendered by the same function. Naming its declared type is
    what retires the hand ``.value`` unwrap an enum-typed variable used to need,
    and what makes forgetting one a type error rather than a base URL reading
    ``Region.EU``."""

    base_url: str
    path: str
    variables: Sequence[Param[Any]] = ()
